'use client'

import Draggable from 'react-draggable'
import { useRef, type ReactNode } from 'react'

type Win7WindowProps = {
  title: string
  children: ReactNode
  defaultWidth?: number
  defaultHeight?: number
  defaultX?: number
  defaultY?: number
}

export const Win7Window = ({
  title,
  children,
  defaultWidth = 480,
  defaultHeight = 300,
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
        style={{
          width: defaultWidth,
          height: defaultHeight,
          minWidth: 'min-content',
          minHeight: 'min-content',
          resize: 'both',
          overflow: 'hidden',
          display: 'inline-block',
          position: 'absolute',
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
        <div
          style={{
            overflow: 'auto',
            height: 'calc(100% - 33px)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {children}
        </div>
      </div>
    </Draggable>
  )
}
