'use client'

import Image from 'next/image'
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
    <div className="flex h-10 shrink-0 items-center justify-between border-t-white/25 bg-[rgba(66,96,129,0.21)] pl-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-xs">
      {/* Start button */}

      <Image
        src="/start.png"
        width="40"
        height="40"
        alt="Start"
        className="h-10"
      />

      {/* Clock */}
      <div className="flex items-center">
        <div className="flex min-w-18 flex-col items-center justify-center text-xs leading-[1.3] text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.4)]">
          <span>{time}</span>
          <span>{date}</span>
        </div>
        <div className="h-10 w-2.5 border border-t-0 border-white/25" />
      </div>
    </div>
  )
}
