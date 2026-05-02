'use client'

import Draggable from 'react-draggable'
import { useEffect, useRef, useState, type ReactNode } from 'react'

let zCounter = 1
const allSetActive = new Set<(v: boolean) => void>()

type Win7WindowProps = {
  title: string
  children: ReactNode
  defaultX?: number
  defaultY?: number
}

export const Win7Window = ({
  title,
  children,
  defaultX = 20,
  defaultY = 20,
}: Win7WindowProps) => {
  const nodeRef = useRef<HTMLDivElement>(null)
  const [zIndex, setZIndex] = useState(1)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    allSetActive.add(setIsActive)
    return () => {
      allSetActive.delete(setIsActive)
    }
  }, [])

  useEffect(() => {
    const el = nodeRef.current
    if (!el) return
    const raise = () => {
      setZIndex(++zCounter)
      allSetActive.forEach((s) => s(false))
      setIsActive(true)
    }
    el.addEventListener('mousedown', raise)
    return () => el.removeEventListener('mousedown', raise)
  }, [])

  return (
    <Draggable
      handle=".title-bar"
      nodeRef={nodeRef as React.RefObject<HTMLElement>}
      bounds="parent"
      defaultPosition={{ x: defaultX, y: defaultY }}
    >
      <div
        ref={nodeRef}
        className={`window${isActive ? 'active' : ''}`}
        style={{ position: 'absolute', display: 'inline-block', zIndex }}
      >
        <div className="title-bar" style={{ cursor: 'grab' }}>
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
        {children}
      </div>
    </Draggable>
  )
}
