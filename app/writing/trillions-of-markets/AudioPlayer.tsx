'use client'

import { useEffect, useRef, useState } from 'react'

function fmt(s: number): string {
  if (!isFinite(s) || s < 0) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

const SPEEDS = [1, 1.25, 1.5, 1.75, 2, 2.5, 3]

// Render 1.5 as "1.5x" but 1 as "1x" (no trailing ".0").
function fmtSpeed(rate: number): string {
  return `${Number.isInteger(rate) ? rate : rate.toString()}x`
}

// Floating "Listen" pill for the audio narration. Lives in the React tree
// (not the injected essay HTML) so it survives essay re-ports. Styled to match
// the essay's warm-paper palette.
export function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)
  const [speedIdx, setSpeedIdx] = useState(0)

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    const onTime = () => setCurrent(a.currentTime)
    const onMeta = () => {
      setDuration(a.duration)
      a.playbackRate = SPEEDS[speedIdx] // keep chosen rate across (re)loads
    }
    const onEnd = () => setPlaying(false)
    a.addEventListener('timeupdate', onTime)
    a.addEventListener('loadedmetadata', onMeta)
    a.addEventListener('ended', onEnd)
    return () => {
      a.removeEventListener('timeupdate', onTime)
      a.removeEventListener('loadedmetadata', onMeta)
      a.removeEventListener('ended', onEnd)
    }
  }, [])

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    if (a.paused) {
      a.play()
      setPlaying(true)
    } else {
      a.pause()
      setPlaying(false)
    }
  }

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const a = audioRef.current
    if (!a || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    a.currentTime = ((e.clientX - rect.left) / rect.width) * duration
  }

  const cycleSpeed = () => {
    const next = (speedIdx + 1) % SPEEDS.length
    setSpeedIdx(next)
    if (audioRef.current) audioRef.current.playbackRate = SPEEDS[next]
  }

  const pct = duration ? (current / duration) * 100 : 0

  return (
    <div
      style={{
        position: 'fixed',
        left: '50%',
        bottom: '1.6rem',
        transform: 'translateX(-50%)',
        zIndex: 60,
        display: 'flex',
        alignItems: 'center',
        gap: '0.85rem',
        padding: '0.6rem 1rem 0.6rem 0.7rem',
        borderRadius: '999px',
        background: '#f7f3ea',
        border: '1px solid #d8cfbd',
        boxShadow: '0 6px 24px rgba(29,25,22,0.16)',
        fontFamily: '"Fraunces", Georgia, serif',
        maxWidth: 'calc(100vw - 2rem)',
        width: '22rem',
      }}
    >
      <audio ref={audioRef} src={src} preload="metadata" />
      <button
        onClick={toggle}
        aria-label={playing ? 'Pause narration' : 'Play narration'}
        style={{
          flexShrink: 0,
          width: '2.4rem',
          height: '2.4rem',
          borderRadius: '999px',
          border: 'none',
          background: '#933420',
          color: '#f7f3ea',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 12 12" fill="currentColor">
            <rect x="2" y="1.5" width="3" height="9" rx="1" />
            <rect x="7" y="1.5" width="3" height="9" rx="1" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 12 12" fill="currentColor">
            <path d="M3 1.8v8.4a.5.5 0 0 0 .77.42l6.5-4.2a.5.5 0 0 0 0-.84L3.77 1.38A.5.5 0 0 0 3 1.8Z" />
          </svg>
        )}
      </button>

      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.3rem', minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div
            style={{
              fontSize: '0.78rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#933420',
              fontWeight: 600,
            }}
          >
            Listen
          </div>
          <button
            onClick={cycleSpeed}
            aria-label={`Playback speed ${fmtSpeed(SPEEDS[speedIdx])}, tap to change`}
            style={{
              flexShrink: 0,
              border: '1px solid #d8cfbd',
              background: '#efe9dc',
              color: '#933420',
              fontFamily: '"Fraunces", Georgia, serif',
              fontWeight: 600,
              fontSize: '0.74rem',
              lineHeight: 1,
              padding: '0.2rem 0.5rem',
              borderRadius: '999px',
              cursor: 'pointer',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {fmtSpeed(SPEEDS[speedIdx])}
          </button>
        </div>
        <div
          onClick={seek}
          style={{
            height: '4px',
            borderRadius: '999px',
            background: '#e3dccb',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: `${pct}%`,
              background: '#933420',
              borderRadius: '999px',
            }}
          />
        </div>
      </div>

      <div style={{ flexShrink: 0, fontSize: '0.8rem', color: '#857a6c', fontVariantNumeric: 'tabular-nums' }}>
        {fmt(duration ? duration - current : 0)}
      </div>
    </div>
  )
}
