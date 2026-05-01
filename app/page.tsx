import { Taskbar } from '../components/taskbar'
import { HeroWindow } from '../components/hero-window'
import { AboutWindow } from '../components/about-window'

export default function Home() {
  return (
    <div className="win7">
      <div className="desktop">
        <div className="desktop-area">
          <HeroWindow defaultX={20} defaultY={20} />
          <AboutWindow defaultX={440} defaultY={20} />
        </div>
        <Taskbar />
      </div>
    </div>
  )
}
