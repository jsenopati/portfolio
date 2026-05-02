import { Taskbar } from '../components/taskbar'
import { DesktopArea } from '../components/desktop-area'

export default function Home() {
  return (
    <div className="win7">
      <div className="desktop">
        <DesktopArea />
        <Taskbar />
      </div>
    </div>
  )
}
