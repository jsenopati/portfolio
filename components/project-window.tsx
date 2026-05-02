'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Win7Window } from './win7-window'
import retrain from '../public/retrain.png'
import authrequest from '../public/authrequest.png'
import areqapp from '../public/areqapp.webp'
import academics from '../public/academics.png'
import solve from '../public/s01ve.png'
import scan from '../public/scan.png'
import roster from '../public/roster.png'
import bulltrout from '../public/bulltrout.png'

type Project = {
  id: string
  name: string
  stack: string
  description: string
  image: StaticImageData
  href: string
}

const projects: Project[] = [
  {
    id: 'bulltrout',
    name: 'Bulltrout',
    stack:
      'Next.js, TypeScript, Postmark, DaisyUI, Google Cloud Tasks, Firebase',
    description:
      'Bulltrout is a phishing simulation & e-learning platform with light LMS features. Currently supporting 1000+ users across multiple MSP clients, Bulltrout is likely my best work thus far. I played an integral role in its development, leading frontend development and design, overall system architecture, and more.',
    image: bulltrout,
    href: 'https://bulltrout.co',
  },
  {
    id: 'retrain',
    name: 'ReTrain Canada',
    stack: 'Next.js, TypeScript, Firebase, Figma',
    description:
      'The original ReTrain Canada website was built in WordPress, and was a bit outdated. I spearheaded redesigning and redeveloping the site to modernize and improve the user experience, which immediately resulted in a massive increase in traffic and client intake. The design phases were done in Figma, with full prototyping and iteration.',
    image: retrain,
    href: 'https://retraincanada.com/',
  },
  {
    id: 'areqapp',
    name: 'AuthRequest App',
    stack: 'Expo, React Native, TypeScript, Postmark',
    description:
      'The AuthRequest mobile app is a cutting edge 2FA security app that allows users to securely prevent business email compromise. As the first major mobile app project I contributed to during my internship at s01ve, I credit it with skyrocketing my full-stack skills.',
    image: areqapp,
    href: 'https://play.google.com/store/apps/details?id=com.s01ve.aodAuth',
  },
  {
    id: 'scan',
    name: 's01ve Scan',
    stack: 'TypeScript, RESTful API, Google Cloud, Cloud Functions',
    description:
      'Built around RESTful APIs and Google Cloud, the s01ve Scan was the first project I worked on where I had to truly expand my backend skills. This project analyzes domains and emails and aggregates the results into beautiful PDF reports.',
    image: scan,
    href: 'https://www.s01ve.io/scan',
  },
  {
    id: 'authrequest',
    name: 'AuthRequest',
    stack: 'Next.js, TypeScript, Firebase, Figma, Postmark',
    description:
      "The AuthRequest webapp has a ton of awesome features once you're logged in with an enterprise account — phishing simulations, cybersecurity training modules, and more. I contributed full-stack to this project, with a big focus on user experience and continuous iteration.",
    image: authrequest,
    href: 'https://authrequest.io/',
  },
  {
    id: 'academics',
    name: 'ReTrain Academics',
    stack: 'Next.js, TypeScript, Firebase, Figma',
    description:
      'Fully featured Learning Management System (LMS) with fully hotswappable enterprise whitelabel / branding based on subdomain. I spearheaded the design, UI/UX, and frontend development of this project.',
    image: academics,
    href: 'https://retrainacademics.com/',
  },
  {
    id: 'solve',
    name: 's01ve Cyber Solutions',
    stack: 'Next.js, TypeScript, Firebase, Figma, HubSpot',
    description:
      'Rebuilding and modernizing the s01ve Cyber Solutions website using Next.js and TypeScript allowed me to explore concepts such as server-side rendering, CMS integration, and more. It fully integrates with the s01ve Scan API and provides a seamless user experience.',
    image: solve,
    href: 'https://s01ve.io/',
  },
  {
    id: 'roster',
    name: 'Roster Staffing',
    stack: 'Next.js, TypeScript, Resend, Figma',
    description:
      "Though it's a simple site, the Roster Staffing page was a huge learning experience for me: I led the meetings with the client to capture requirements and feedback, then directed design and development of the project.",
    image: roster,
    href: 'https://rosterstaffing.ca/',
  },
]

type Props = {
  defaultX?: number
  defaultY?: number
}

export const ProjectWindow = ({ defaultX = 20, defaultY = 20 }: Props) => {
  const [selectedId, setSelectedId] = useState(projects[0].id)
  const project = projects.find((p) => p.id === selectedId)!

  return (
    <Win7Window
      title="projectbrowser.exe"
      defaultX={defaultX}
      defaultY={defaultY}
    >
      <div className="window-body">
        {/* Toolbar */}
        <div
          role="toolbar"
          className="flex gap-1 border-b border-[#ccc] px-1 py-0.5"
        >
          <div className="flex flex-1 items-center gap-1 px-1">
            <span className="text-[11px] text-[#555]">Address:</span>
            <input
              readOnly
              value={`C:\\Portfolio\\Projects\\${project.name}`}
              className="flex-1 text-[11px]"
            />
          </div>
        </div>

        {/* Two-pane body */}
        <div className="flex h-130 w-135">
          {/* Left: tree / project list */}
          <div className="w-45 overflow-y-auto border-r border-[#ccc] p-1">
            <fieldset>
              <legend>Projects</legend>
              <ul role="tree" className="m-0 list-none p-0">
                {projects.map((p) => (
                  <li
                    key={p.id}
                    role="treeitem"
                    aria-selected={selectedId === p.id}
                    tabIndex={0}
                    onClick={() => setSelectedId(p.id)}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedId(p.id)}
                    className="cursor-pointer px-1 py-1"
                  >
                    📁 {p.name}
                  </li>
                ))}
              </ul>
            </fieldset>
          </div>

          {/* Right: detail panel */}
          <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-3">
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="self-start"
            >
              <Image
                src={project.image}
                alt={project.name}
                placeholder="blur"
                className="block max-h-50 w-auto max-w-full object-contain"
              />
            </a>

            <fieldset>
              <legend>{project.name}</legend>
              <p className="m-0 text-[12px] leading-relaxed">
                {project.description}
              </p>
            </fieldset>

            <fieldset>
              <legend>Tech Stack</legend>
              <p className="m-0 text-[12px]">{project.stack}</p>
            </fieldset>

            <div>
              <a href={project.href} target="_blank" rel="noreferrer">
                <button>🔗 Open Project</button>
              </a>
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div
          role="status"
          className="flex justify-between border-t border-[#ccc] px-2 py-0.5 text-[11px] text-[#555]"
        >
          <span>{projects.length} projects</span>
          <span>{project.stack.split(',').length} technologies used</span>
        </div>
      </div>
    </Win7Window>
  )
}
