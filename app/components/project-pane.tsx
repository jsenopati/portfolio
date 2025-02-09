import { DoublePane } from './double-pane'
import Image from 'next/image'
import retrain from '../../public/retrain.png'
import authrequest from '../../public/authrequest.png'
import areqapp from '../../public/areqapp.webp'
import academics from '../../public/academics.png'
import solve from '../../public/s01ve.png'
import scan from '../../public/scan.png'
import roster from '../../public/roster.png'

type Props = {}

export const ProjectPane = (props: Props) => {
  return (
    <section className="w-full h-fit ">
      <DoublePane
        header="ReTrain Canada"
        headerTextSize="text-xl sm:text-3xl lg:text-4xl"
        description="The original ReTrain Canada website was built in WordPress, and was a bit outdated. I spearheaded redesigning and redeveloping the site to modernize and improve the user experience, which immediadly resulted in a massive +400% increase in client intake."
        descTextWeight="font-bold"
        headerTextColor="text-emerald-300"
        descTextColor="text-gray-200"
        content={
          <a href="https://retraincanada.com/" target="_blank" rel="noreferrer">
            <Image
              className="object-cover rounded-tl-3xl rounded-br-3xl sm:min-h-[20rem]"
              src={retrain}
              placeholder="blur"
              alt="retrain screenshot"
            />
          </a>
        }
        tagText="Next.js, TypeScript, Firebase, Figma"
        margin=""
        padding="py-10"
        textContentPadding="pb-6 md:pb-0"
      />
      <DoublePane
        side="right"
        header="AuthRequest Mobile App"
        headerTextSize="text-xl sm:text-3xl lg:text-4xl"
        description="authrequest app text here"
        descTextWeight="font-bold"
        headerTextColor="text-emerald-300"
        descTextColor="text-gray-200"
        content={
          <a
            href="https://play.google.com/store/apps/details?id=com.s01ve.aodAuth"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="object-contain rounded-tr-3xl rounded-bl-3xl h-[30rem]"
              src={areqapp}
              placeholder="blur"
              alt="authrequest screenshot"
            />
          </a>
        }
        tagText="Expo, React Native, TypeScript"
        margin=""
        padding="py-10"
        textContentPadding="pb-6 md:pb-0"
      />
      <DoublePane
        side="left"
        header="s01ve Scan"
        headerTextSize="text-xl sm:text-3xl lg:text-4xl"
        description="solve scan text here"
        descTextWeight="font-bold"
        headerTextColor="text-emerald-300"
        descTextColor="text-gray-200"
        content={
          <a href="https://www.s01ve.io/scan" target="_blank" rel="noreferrer">
            <Image
              className="object-cover rounded-tr-3xl rounded-bl-3xl sm:min-h-[20rem]"
              src={scan}
              placeholder="blur"
              alt="authrequest screenshot"
            />
          </a>
        }
        tagText="TypeScript, RESTful API, Google Cloud, Cloud Functions"
        margin=""
        padding="py-10"
        textContentPadding="pb-6 md:pb-0"
      />
      <DoublePane
        side="right"
        header="AuthRequest"
        headerTextSize="text-xl sm:text-3xl lg:text-4xl"
        description="authrequest text here"
        descTextWeight="font-bold"
        headerTextColor="text-emerald-300"
        descTextColor="text-gray-200"
        content={
          <a href="https://authrequest.io/" target="_blank" rel="noreferrer">
            <Image
              className="object-cover rounded-tr-3xl rounded-bl-3xl sm:min-h-[20rem]"
              src={authrequest}
              placeholder="blur"
              alt="authrequest screenshot"
            />
          </a>
        }
        tagText="Next.js, TypeScript, Firebase, Figma"
        margin=""
        padding="py-10"
        textContentPadding="pb-6 md:pb-0"
      />
      <DoublePane
        header="ReTrain Academics"
        headerTextSize="text-xl sm:text-3xl lg:text-4xl"
        description="talk about whitelabel here"
        descTextWeight="font-bold"
        headerTextColor="text-emerald-300"
        descTextColor="text-gray-200"
        content={
          <a
            href="https://retrainacademics.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="object-cover rounded-tl-3xl rounded-br-3xl sm:min-h-[20rem]"
              src={academics}
              placeholder="blur"
              alt="retrain academics screenshot"
            />
          </a>
        }
        tagText="Next.js, TypeScript, Firebase, Figma"
        margin=""
        padding="py-10"
        textContentPadding="pb-6 md:pb-0"
      />
      <DoublePane
        side="right"
        header="s01ve Cyber Solutions"
        headerTextSize="text-xl sm:text-3xl lg:text-4xl"
        description="talk about site here"
        descTextWeight="font-bold"
        headerTextColor="text-emerald-300"
        descTextColor="text-gray-200"
        content={
          <a href="https://s01ve.io/" target="_blank" rel="noreferrer">
            <Image
              className="object-cover rounded-tl-3xl rounded-br-3xl sm:min-h-[20rem]"
              src={solve}
              placeholder="blur"
              alt="solve screenshot"
            />
          </a>
        }
        tagText="Next.js, TypeScript, Firebase, Figma"
        margin=""
        padding="py-10"
        textContentPadding="pb-6 md:pb-0"
      />
      <DoublePane
        header="Roster Staffing"
        headerTextSize="text-xl sm:text-3xl lg:text-4xl"
        description="talk about site here"
        descTextWeight="font-bold"
        headerTextColor="text-emerald-300"
        descTextColor="text-gray-200"
        content={
          <a href="https://rosterstaffing.ca/" target="_blank" rel="noreferrer">
            <Image
              className="object-cover rounded-tl-3xl rounded-br-3xl sm:min-h-[20rem]"
              src={roster}
              placeholder="blur"
              alt="roster screenshot"
            />
          </a>
        }
        tagText="Next.js, TypeScript, Firebase, Figma"
        margin=""
        padding="py-10"
        textContentPadding="pb-6 md:pb-0"
      />
    </section>
  )
}
