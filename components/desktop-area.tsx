'use client'

import { HeroWindow } from './hero-window'
import { AboutWindow } from './about-window'
import { WindowManagerProvider } from './window-manager'

export const DesktopArea = () => {
  return (
    <WindowManagerProvider>
      <div className="desktop-area">
        <HeroWindow defaultX={20} defaultY={20} />
        <AboutWindow defaultX={440} defaultY={20} />
      </div>
    </WindowManagerProvider>
  )
}
