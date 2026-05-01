'use client'

import { useEffect, useState } from 'react'

export const Taskbar = () => {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        })
      )
      setDate(
        now.toLocaleDateString('en-US', {
          month: 'numeric',
          day: 'numeric',
          year: 'numeric',
        })
      )
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      style={{
        height: '40px',
        background:
          'linear-gradient(180deg, #4a9fd4 0%, #1a6aa8 40%, #0d4f8a 100%)',
        borderTop: '1px solid #0a3a6a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 4px',
        flexShrink: 0,
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)',
      }}
    >
      {/* Start button */}
      <button
        style={{
          height: '34px',
          padding: '0 16px 0 12px',
          background:
            'linear-gradient(180deg, #5cb85c 0%, #3a8a3a 50%, #2d6b2d 100%)',
          border: '1px solid #1a4a1a',
          borderRadius: '0 14px 14px 0',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '13px',
          cursor: 'pointer',
          boxShadow:
            'inset 0 1px 0 rgba(255,255,255,0.4), 0 1px 2px rgba(0,0,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          letterSpacing: '0.5px',
          textShadow: '0 1px 1px rgba(0,0,0,0.5)',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7" fill="white" opacity="0.9" />
          <circle cx="8" cy="8" r="5" fill="#3a8a3a" />
          <path d="M8 3 L8 13 M3 8 L13 8" stroke="white" strokeWidth="1.5" />
        </svg>
        Start
      </button>

      {/* Clock */}
      <div
        style={{
          height: '34px',
          padding: '0 10px',
          background: 'rgba(0,0,0,0.2)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '2px',
          color: 'white',
          fontSize: '12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 1.3,
          textShadow: '0 1px 1px rgba(0,0,0,0.5)',
          minWidth: '72px',
        }}
      >
        <span style={{ fontWeight: 600 }}>{time}</span>
        <span style={{ opacity: 0.85 }}>{date}</span>
      </div>
    </div>
  )
}
