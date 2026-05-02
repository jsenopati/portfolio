'use client'

import { createContext, useContext, useRef } from 'react'

type WindowManagerContextType = {
  bringToFront: () => number
}

const WindowManagerContext = createContext<WindowManagerContextType>({
  bringToFront: () => 0,
})

export const useWindowManager = () => useContext(WindowManagerContext)

export const WindowManagerProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const counter = useRef(1)
  const bringToFront = () => ++counter.current
  return (
    <WindowManagerContext.Provider value={{ bringToFront }}>
      {children}
    </WindowManagerContext.Provider>
  )
}
