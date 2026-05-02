'use client'

import { HeroWindow } from './hero-window'
import { AboutWindow } from './about-window'
import { ProjectSection } from './project-section'
import { WindowManagerProvider } from './window-manager'

export const DesktopArea = () => {
  return (
    <WindowManagerProvider>
      <div className="desktop-area">
        <HeroWindow defaultX={20} defaultY={20} />
        <AboutWindow defaultX={440} defaultY={20} />
        <ProjectSection defaultX={20} defaultY={250} />
      </div>
    </WindowManagerProvider>
  )
}
