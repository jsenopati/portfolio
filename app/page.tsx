import { IoLogoApple, IoLogoWindows } from 'react-icons/io5'
import { DividerDropdown } from '../components/divider-dropdown'
import { ProjectSection } from '../components/project-section'
import { Taskbar } from '../components/taskbar'
import { HeroWindow } from '../components/hero-window'

export default function Home() {
  return (
    <div className="win7">
      <div className="desktop">
        <div className="desktop-area">
          <HeroWindow />
          <div className="mx-auto flex w-5/6 flex-col items-center rounded-2xl bg-zinc-800 py-16 text-gray-300">
            <div className="my-4 h-1 w-5/6 bg-linear-to-r from-purple-300 to-pink-300" />
            <DividerDropdown
              showDefault={true}
              header="About Me"
              headerGradientFrom="from-purple-300"
              headerGradientTo="to-pink-300"
              expandHeight="h-fit"
            >
              <section className="flex flex-col gap-4">
                <p>
                  I&apos;m a full stack developer / UI designer / support
                  specialist at{' '}
                  <a
                    href="https://www.s01ve.io/"
                    target="_blank"
                    className="rounded-md bg-linear-to-r from-pink-300 to-purple-300 bg-clip-text font-bold text-transparent ring-0 ring-teal-200 transition-all hover:animate-pulse hover:ring-2"
                  >
                    s01ve Cyber Solutions
                  </a>{' '}
                  💻🔐, an MSSP company where I get to wear a lot of hats 🎩 and
                  work on a variety of projects.
                </p>
                <p>
                  I also do web dev for{' '}
                  <a
                    href="https://treemansion.com/"
                    target="_blank"
                    className="rounded-md bg-linear-to-r from-pink-300 to-purple-300 bg-clip-text font-bold text-transparent ring-0 ring-teal-200 transition-all hover:animate-pulse hover:ring-2"
                  >
                    Treemansion.com
                  </a>{' '}
                  🏠🌴, an e-commerce platform and community for all things AI
                  art 🖼, working primarily with Next.js and TypeScript.
                </p>

                <p>
                  Throughout my time in the ITSD👨‍💻 program at SAIT🏫, as well as
                  before and after, I worked as a Windows
                  <IoLogoWindows className="mb-1 ml-0.5 inline" /> and Apple
                  <IoLogoApple className="mb-1 ml-0.5 inline" /> technician,
                  resolving hardware and software issues for clients across a
                  wide range of devices 📱.
                </p>

                <p>
                  Right now, my interests are Go, React, and honing my design
                  skills with Figma 🎨.
                </p>
              </section>
            </DividerDropdown>

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
