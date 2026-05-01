import { Taskbar } from '../components/taskbar'
import { HeroWindow } from '../components/hero-window'
import { AboutWindow } from '../components/about-window'

export default function Home() {
  return (
    <div className="win7">
      <div className="desktop">
        <div className="desktop-area">
          <HeroWindow defaultX={40} defaultY={30} />
          <AboutWindow defaultX={80} defaultY={60} />
        </div>
        <Taskbar />
      </div>
    </div>
  )
}
