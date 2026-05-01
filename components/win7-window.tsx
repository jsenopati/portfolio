'use client'

import Draggable from 'react-draggable'
import { useRef, type ReactNode } from 'react'

type Win7WindowProps = {
  title: string
  children: ReactNode
  defaultWidth?: number | string
  minWidth?: number
}

export const Win7Window = ({
  title,
  children,
  defaultWidth = 600,
  minWidth = 280,
}: Win7WindowProps) => {
  const nodeRef = useRef<HTMLDivElement>(null)

  return (
    <Draggable handle=".title-bar" nodeRef={nodeRef as React.RefObject<HTMLElement>}>
      <div
        ref={nodeRef}
        className="window"
        style={{
          width: defaultWidth,
          minWidth,
          resize: 'both',
          overflow: 'hidden',
          marginBottom: '16px',
          display: 'inline-block',
        }}
      >
        <div className="title-bar" style={{ cursor: 'grab' }}>
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
        <div style={{ overflow: 'auto', height: 'calc(100% - 33px)' }}>
          {children}
        </div>
      </div>
    </Draggable>
  )
}
