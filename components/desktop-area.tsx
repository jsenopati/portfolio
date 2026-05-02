'use client'

import { HeroWindow } from './hero-window'
import { AboutWindow } from './about-window'
import { ProjectWindow } from './project-window'

export const DesktopArea = () => {
  return (
    <div className="desktop-area">
      <HeroWindow defaultX={20} defaultY={20} />
      <AboutWindow defaultX={440} defaultY={20} />
      <ProjectWindow defaultX={20} defaultY={250} />
    </div>
  )
}
