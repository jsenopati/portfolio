'use client'
import Link from 'next/link'
import Image from 'next/image'
import { IoMdArrowRoundDown, IoMdArrowRoundForward } from 'react-icons/io'
import {
  IoBagHandleOutline,
  IoBookmarkOutline,
  IoBookmark,
} from 'react-icons/io5'

type ButtonProps = {
  title: string
  bgColor: 'blue' | 'red' | 'teal'
  inHref?: string
  exHref?: string
  icon?:
    | 'arrow-right'
    | 'arrow-down'
    | 'anydesk'
    | 'handle-bag'
    | 'save'
    | 'saved'
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export const Button = ({
  title,
  bgColor,
  inHref,
  exHref,
  icon,
  type = 'button',
  onClick = () => {},
  disabled = false,
}: ButtonProps) => {
  const icons = {
    'arrow-right': (
      <IoMdArrowRoundForward className="text-2xl ml-1 group-hover:translate-x-1 transition duration-300" />
    ),
    'arrow-down': (
      <IoMdArrowRoundDown className="text-2xl ml-1 group-hover:translate-y-1 transition duration-300" />
    ),
    anydesk: (
      <Image
        src="/footer-anydesk-logo.svg"
        height={20}
        width={20}
        alt="anydesk"
        className="w-6 h-6 ml-2"
      />
    ),
    'handle-bag': <IoBagHandleOutline className="text-2xl ml-1" />,
    save: <IoBookmarkOutline className="text-2xl ml-1" />,
    saved: <IoBookmark className="text-2xl ml-1" />,
  }

  // Check for icon prop and return icon element
  const iconElement = icon ? icons[icon] : null

  const bgColorClass = {
    blue: 'border-navy-blue',
    red: 'border-light-red',
    teal: 'border-light-teal',
  }[bgColor]

  const bgColorClassBehind = {
    blue: 'depth-layer-gray',
    red: 'depth-layer-red',
    teal: 'depth-layer-teal',
  }[bgColor]

  const content = (
    <div className={`flex h-fit w-fit mt-2 ${bgColorClassBehind}`}>
      <button
        className={`flex ${
          disabled
            ? 'cursor-not-allowed'
            : 'hover:translate-x-1 hover:translate-y-1 focus:translate-x-1 focus:translate-y-1'
        } items-center rounded-xl w-fit h-fit min-h-10 py-1 px-6 text-lg text-black font-bold transition-all duration-300 border-4 bg-white text-nowrap ${bgColorClass} ${
          icon ? 'pr-4' : ''
        }`}
        disabled={disabled}
        onClick={onClick}
        //prevent tab focus when wrapped in Link or <a> tag
        tabIndex={inHref || exHref ? -1 : 0}
        type={type}
      >
        {title}
        {iconElement}
      </button>
    </div>
  )

  // If internal link, use next/link
  if (inHref)
    return (
      <Link href={inHref} className="w-fit flex">
        {content}
      </Link>
    )

  // If external link, use <a> tag, open new tab
  if (exHref)
    return (
      <a
        href={exHref}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit flex"
      >
        {content}
      </a>
    )

  return content
}
