'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const update = () => {
      const root = document.documentElement
      const max = root.scrollHeight - root.clientHeight || 1
      setWidth(((root.scrollTop || document.body.scrollTop) / max) * 100)
    }

    update()
    document.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      document.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return <div className="coasean-progress" style={{ width: `${width}%` }} />
}
