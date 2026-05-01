import Image, { StaticImageData } from 'next/image'
import { IoLayers } from 'react-icons/io5'

type ProjectsDoublePaneProps = {
  side?: 'left' | 'right'
  h2: string
  stack: string
  h3: string
  desc: string
  imgSrc: StaticImageData
  imgHref: string
}

export const ProjectsDoublePane = ({
  side,
  h2,
  stack,
  h3,
  desc,
  imgSrc,
  imgHref,
}: ProjectsDoublePaneProps) => {
  return (
    <div className="flex h-fit flex-col gap-8 md:flex-row">
      <a
        href={imgHref}
        target="_blank"
        rel="noreferrer"
        className="flex size-full"
      >
        <Image
          className="size-full rounded-tr-3xl rounded-bl-3xl object-contain sm:min-h-80"
          src={imgSrc}
          placeholder="blur"
          alt="bulltrout screenshot"
        />
      </a>
      <div className="flex flex-col">
        <h2 className="text-3xl font-semibold text-emerald-300">{h2}</h2>
        <div className="flex w-fit items-center gap-2 rounded-xl border-2 px-2 py-1 font-bold">
          <IoLayers className="text-3xl text-teal-300" />
          <p className="font-semibold text-purple-300">{stack}</p>
        </div>
        <h3 className="text-xl font-semibold text-emerald-300">{h2}</h3>
        <p className="text-lg font-normal text-gray-200">{desc}</p>
      </div>
    </div>
  )
}
