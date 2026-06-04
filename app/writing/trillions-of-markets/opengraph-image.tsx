import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'Trillions of Markets — Grant Stenger'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Palette pulled from the essay's own design system (content.ts).
const PAPER = '#f7f3ea'
const INK = '#1d1916'
const INK_SOFT = '#544c42'
const ACCENT = '#933420'
const RULE = '#d8cfbd'

async function loadFraunces(weight: 400 | 500): Promise<ArrayBuffer | null> {
  // Fetch a Fraunces TTF from Google Fonts to match the essay's display face.
  // Falls back to system serif if the network fetch fails during build.
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,${weight}&display=swap`,
      { headers: { 'User-Agent': 'Mozilla/5.0' } },
    ).then((r) => r.text())
    const url = css.match(/src:\s*url\(([^)]+)\)\s*format\('(?:truetype|opentype)'\)/)?.[1]
    if (!url) return null
    return await fetch(url).then((r) => r.arrayBuffer())
  } catch {
    return null
  }
}

export default async function Image() {
  const [regular, medium] = await Promise.all([loadFraunces(400), loadFraunces(500)])

  const fonts = [
    regular && { name: 'Fraunces', data: regular, weight: 400 as const, style: 'normal' as const },
    medium && { name: 'Fraunces', data: medium, weight: 500 as const, style: 'normal' as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; weight: 400 | 500; style: 'normal' }[]

  const titleFont = fonts.length ? 'Fraunces' : 'Georgia, serif'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          background: PAPER,
          padding: '76px 90px',
          fontFamily: titleFont,
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 8,
            textTransform: 'uppercase',
            color: ACCENT,
            fontWeight: 500,
          }}
        >
          Essay · June 2026
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 40 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 128,
              lineHeight: 1.08,
              color: INK,
              fontWeight: 500,
              letterSpacing: -2,
            }}
          >
            <span>Trillions</span>
            <span>of Markets</span>
          </div>
          <div
            style={{
              marginTop: 30,
              fontSize: 33,
              lineHeight: 1.32,
              color: INK_SOFT,
              fontStyle: 'italic',
              maxWidth: 880,
            }}
          >
            Why a collapse in the cost of making almost anything tradable
            produces not thousands of markets but trillions.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 'auto',
            borderTop: `2px solid ${RULE}`,
            paddingTop: 26,
            fontSize: 30,
            color: INK,
          }}
        >
          Grant Stenger
          <span style={{ color: '#857a6c', marginLeft: 16 }}>· grantstenger.com</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    },
  )
}
