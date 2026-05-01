import { IoLogoApple, IoLogoWindows } from 'react-icons/io5'
import { Win7Window } from './win7-window'

type AboutWindowProps = {
  defaultX?: number
  defaultY?: number
}

export const AboutWindow = ({ defaultX, defaultY }: AboutWindowProps) => {
  return (
    <Win7Window
      title="About Me"
      defaultWidth={520}
      defaultHeight={280}
      defaultX={defaultX}
      defaultY={defaultY}
    >
      <div
        className="window-body has-space"
        style={{ height: '100%', boxSizing: 'border-box' }}
      >
        <div className="flex flex-col gap-3 pt-3">
          <p>
            I&apos;m a full stack developer / UI designer / support specialist
            at{' '}
            <a
              href="https://www.s01ve.io/"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#0055e5', fontWeight: 'bold' }}
            >
              s01ve Cyber Solutions
            </a>{' '}
            💻🔐, an MSSP company where I get to wear a lot of hats 🎩 and work
            on a variety of projects.
          </p>
          <p>
            I also do web dev for{' '}
            <a
              href="https://treemansion.com/"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#0055e5', fontWeight: 'bold' }}
            >
              Treemansion.com
            </a>{' '}
            🏠🌴, an e-commerce platform and community for all things AI art 🖼,
            working primarily with Next.js and TypeScript.
          </p>
          <p>
            Throughout my time in the ITSD👨‍💻 program at SAIT🏫, as well as
            before and after, I worked as a Windows
            <IoLogoWindows className="mb-1 ml-0.5 inline" /> and Apple
            <IoLogoApple className="mb-1 ml-0.5 inline" /> technician, resolving
            hardware and software issues for clients across a wide range of
            devices 📱.
          </p>
          <p>
            Right now, my interests are Go, React, and honing my design skills
            with Figma 🎨.
          </p>
        </div>
      </div>
    </Win7Window>
  )
}
