import { DividerDropdown } from '../components/divider-dropdown'
import { ProjectSection } from '../components/project-section'
import { Taskbar } from '../components/taskbar'
import { HeroWindow } from '../components/hero-window'
import { AboutWindow } from '../components/about-window'

export default function Home() {
  return (
    <div className="win7">
      <div className="desktop">
        <div className="desktop-area">
          <HeroWindow />
          <AboutWindow />
          <div className="mx-auto flex w-5/6 flex-col items-center rounded-2xl bg-zinc-800 py-16 text-gray-300">
            <DividerDropdown
              header="Projects"
              headerGradientFrom="from-emerald-500"
              headerGradientTo="to-blue-300"
              topGradientFrom="from-purple-400"
              topGradientTo="to-pink-400"
              bottomGradientFrom="from-pink-500"
              bottomGradientTo="to-purple-500"
              expandHeight="h-fit"
            >
              <ProjectSection />
            </DividerDropdown>
          </div>
        </div>
        <Taskbar />
      </div>
    </div>
  )
}
