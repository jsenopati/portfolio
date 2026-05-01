'use client'

import { ReactNode, useState } from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'

type DividerDropDownProps = {
  header: string
  headerGradientFrom: string
  headerGradientTo: string
  topGradientFrom?: string
  topGradientTo?: string
  bottomGradientFrom?: string
  bottomGradientTo?: string
  expandHeight: string
  children: ReactNode
  showDefault?: boolean
}

export const DividerDropdown = ({
  header,
  headerGradientFrom,
  headerGradientTo,
  topGradientFrom,
  topGradientTo,
  bottomGradientFrom,
  bottomGradientTo,
  expandHeight,
  children,
  showDefault = false,
}: DividerDropDownProps) => {
  const [show, setShow] = useState(showDefault)

  return (
    <>
      {topGradientFrom && topGradientTo && (
        <div
          className={`my-4 h-1 w-5/6 bg-linear-to-r ${topGradientFrom} ${topGradientTo}`}
        />
      )}
      <div className="flex w-full items-center justify-center gap-4">
        <h2
          className={`mb-1 flex bg-linear-to-r bg-clip-text text-3xl font-bold text-transparent ${headerGradientFrom} ${headerGradientTo}`}
        >
          {header}
        </h2>
        <IoChevronForwardOutline
          className={`flex size-8 cursor-pointer rounded-full ring-2 ring-teal-200 transition-all duration-300 hover:animate-pulse ${
            show ? 'rotate-90' : 'rotate-0'
          }`}
          onClick={() => setShow(!show)}
        />
      </div>
      {bottomGradientFrom && bottomGradientTo && (
        <div
          className={`my-4 h-1 w-5/6 bg-linear-to-r ${bottomGradientFrom} ${bottomGradientTo}`}
        />
      )}
      <div
        className={`${
          show ? `${expandHeight} my-4 opacity-100` : 'my-0 h-0 opacity-0'
        } w-5/6 overflow-hidden transition-all duration-500`}
      >
        {children}
      </div>
    </>
  )
}
