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
        background: 'rgba(30, 90, 160, 0.55)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(255,255,255,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 4px',
        flexShrink: 0,
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)',
      }}
    >
      {/* Start button */}
      <button
        style={{
          height: '36px',
          padding: 0,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/start.png"
          alt="Start"
          style={{ height: '36px', width: 'auto' }}
        />
      </button>

      {/* Clock */}
      <div
        style={{
          height: '34px',
          padding: '0 10px',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '2px',
          color: 'white',
          fontSize: '12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 1.3,
          textShadow: '0 1px 1px rgba(0,0,0,0.4)',
          minWidth: '72px',
        }}
      >
        <span style={{ fontWeight: 600 }}>{time}</span>
        <span style={{ opacity: 0.85 }}>{date}</span>
      </div>
    </div>
  )
}
