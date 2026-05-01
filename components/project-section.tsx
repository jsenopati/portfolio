import { DoublePane } from './double-pane'
import Image from 'next/image'
import retrain from '../public/retrain.png'
import authrequest from '../public/authrequest.png'
import areqapp from '../public/areqapp.webp'
import academics from '../public/academics.png'
import solve from '../public/s01ve.png'
import scan from '../public/scan.png'
import roster from '../public/roster.png'
import bulltrout from '../public/bulltrout.png'
import { ProjectsDoublePane } from './projects-double-pane'

export const ProjectSection = () => {
  return (
    <>
      <ProjectsDoublePane
        side="left"
        h2="Bulltrout"
        stack="Next.js, TypeScript, Postmark, DaisyUI, Google Cloud Tasks, Firebase"
        h3="Bulltrout"
        desc="Bulltrout is a phishing simulation & e-learning platform with light LMS features. Currently supporting 1000+ users across multiple MSP clients, Bulltrout is likely my best work thus far. I played in integral role in its development, leading frontend development and design, overall system architecture, and more."
        imgSrc={bulltrout}
        imgHref="https://bulltrout.co"
      />
      <DoublePane
        header="ReTrain Canada"
        headerTextSize="text-xl sm:text-3xl lg:text-4xl"
        description="The original ReTrain Canada website was built in WordPress, and was a bit outdated. I spearheaded redesigning and redeveloping the site to modernize and improve the user experience, which immediately resulted in a massive increase in traffic and client intake. The design phases were done in Figma, with full prototyping and iteration. I had a huge focus on new client user experience, so this project features a custom built in-depth intake process."
        descTextWeight="font-bold"
        headerTextColor="text-emerald-300"
        descTextColor="text-gray-200"
        tagText="Next.js, TypeScript, Firebase, Figma"
        margin=""
        padding="py-10"
        textContentPadding="pb-6 md:pb-0"
      >
        <a href="https://retraincanada.com/" target="_blank" rel="noreferrer">
          <Image
            className="rounded-tl-3xl rounded-br-3xl object-cover sm:min-h-80"
            src={retrain}
            placeholder="blur"
            alt="retrain screenshot"
          />
        </a>
      </DoublePane>
      <DoublePane
        side="right"
        header="AuthRequest Mobile App"
        headerTextSize="text-xl sm:text-3xl lg:text-4xl"
        description="The AuthRequest mobile app is a cutting edge 2FA security app that allows users to securely prevent business email compromise. As the first major mobile app project I contributed to during my internship at s01ve, I credit it with skyrocketing my full-stack skills."
        descTextWeight="font-bold"
        headerTextColor="text-emerald-300"
        descTextColor="text-gray-200"
        tagText="Expo, React Native, TypeScript, Postmark"
        margin=""
        padding="py-10"
        textContentPadding="pb-6 md:pb-0"
      >
        <a
          href="https://play.google.com/store/apps/details?id=com.s01ve.aodAuth"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="h-120 w-fit rounded-tr-3xl rounded-bl-3xl object-contain"
            src={areqapp}
            placeholder="blur"
            alt="authrequest screenshot"
          />
        </a>
      </DoublePane>
      <DoublePane
        side="left"
        header="s01ve Scan"
        headerTextSize="text-xl sm:text-3xl lg:text-4xl"
        description="Built around RESTful APIs and Google Cloud, the s01ve Scan was the first project I worked on where I had to truly expand my backend skills. This project analyzes domains and emails and aggregates the results into beautiful PDF reports."
        descTextWeight="font-bold"
        headerTextColor="text-emerald-300"
        descTextColor="text-gray-200"
        tagText="TypeScript, RESTful API, Google Cloud, Cloud Functions"
        margin=""
        padding="py-10"
        textContentPadding="pb-6 md:pb-0"
      >
        <a href="https://www.s01ve.io/scan" target="_blank" rel="noreferrer">
          <Image
            className="rounded-tr-3xl rounded-bl-3xl object-cover sm:min-h-80"
            src={scan}
            placeholder="blur"
            alt="authrequest screenshot"
          />
        </a>
      </DoublePane>
      <DoublePane
        side="right"
        header="AuthRequest"
        headerTextSize="text-xl sm:text-3xl lg:text-4xl"
        description="The AuthRequest webapp has a ton of awesome features once you're logged in with an enterprise account - phishing simulations, cybersecurity training modules, and more. I contributed full-stack to this project, with a big focus on user experience and continuous iteration."
        descTextWeight="font-bold"
        headerTextColor="text-emerald-300"
        descTextColor="text-gray-200"
        tagText="Next.js, TypeScript, Firebase, Figma, Postmark"
        margin=""
        padding="py-10"
        textContentPadding="pb-6 md:pb-0"
      >
        <a href="https://authrequest.io/" target="_blank" rel="noreferrer">
          <Image
            className="rounded-tr-3xl rounded-bl-3xl object-cover sm:min-h-80"
            src={authrequest}
            placeholder="blur"
            alt="authrequest screenshot"
          />
        </a>
      </DoublePane>
      <DoublePane
        header="ReTrain Academics"
        headerTextSize="text-xl sm:text-3xl lg:text-4xl"
        description="Fully featured Learning Management System (LMS) with fully hotswappable enterprise whitelabel / branding based on subdomain. I spearheaded the design, UI / UX, and frontend development of this project."
        descTextWeight="font-bold"
        headerTextColor="text-emerald-300"
        descTextColor="text-gray-200"
        tagText="Next.js, TypeScript, Firebase, Figma"
        margin=""
        padding="py-10"
        textContentPadding="pb-6 md:pb-0"
      >
        <a
          href="https://retrainacademics.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="rounded-tl-3xl rounded-br-3xl object-cover sm:min-h-80"
            src={academics}
            placeholder="blur"
            alt="retrain academics screenshot"
          />
        </a>
      </DoublePane>
      <DoublePane
        side="right"
        header="s01ve Cyber Solutions"
        headerTextSize="text-xl sm:text-3xl lg:text-4xl"
        description="Rebuilding and modernizing the s01ve Cyber Solutions using Next.js and TypeScript allowed me to explore concepts such as server-side rendering, CMS integration, and more. It fully integrates with the s01ve Scan API and provides a seamless user experience."
        descTextWeight="font-bold"
        headerTextColor="text-emerald-300"
        descTextColor="text-gray-200"
        tagText="Next.js, TypeScript, Firebase, Figma, HubSpot"
        margin=""
        padding="py-10"
        textContentPadding="pb-6 md:pb-0"
      >
        <a href="https://s01ve.io/" target="_blank" rel="noreferrer">
          <Image
            className="rounded-tl-3xl rounded-br-3xl object-cover sm:min-h-80"
            src={solve}
            placeholder="blur"
            alt="solve screenshot"
          />
        </a>
      </DoublePane>
      <DoublePane
        header="Roster Staffing"
        headerTextSize="text-xl sm:text-3xl lg:text-4xl"
        description="Though it's a simple site, the Roster Staffing page was a huge learning experience for me: I led the meetings with the client to capture requirements and feedback, then directed design and development of the project."
        descTextWeight="font-bold"
        headerTextColor="text-emerald-300"
        descTextColor="text-gray-200"
        tagText="Next.js, TypeScript, Resend, Figma"
        margin=""
        padding="py-10"
        textContentPadding="pb-6 md:pb-0"
      >
        <a href="https://rosterstaffing.ca/" target="_blank" rel="noreferrer">
          <Image
            className="rounded-tl-3xl rounded-br-3xl object-cover sm:min-h-80"
            src={roster}
            placeholder="blur"
            alt="roster screenshot"
          />
        </a>
      </DoublePane>
    </>
  )
}
