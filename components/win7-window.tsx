'use client'

import Draggable from 'react-draggable'
import { useRef, type ReactNode } from 'react'

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

  return (
    <Draggable
      handle=".title-bar"
      nodeRef={nodeRef as React.RefObject<HTMLElement>}
      bounds="parent"
      defaultPosition={{ x: defaultX, y: defaultY }}
    >
      <div
        ref={nodeRef}
        className="window"
        style={{ position: 'absolute', display: 'inline-block' }}
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
