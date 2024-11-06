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
}: DividerDropDownProps) => {
  const [show, setShow] = useState(false)

  return (
    <>
      {topGradientFrom && topGradientTo && (
        <div
          className={`w-4/6 h-1 my-4 bg-gradient-to-r ${topGradientFrom} ${topGradientTo}`}
        />
      )}
      <div className="flex w-full items-center justify-center gap-4">
        <h2
          className={`flex text-3xl font-bold text-transparent mb-1 bg-clip-text bg-gradient-to-r ${headerGradientFrom} ${headerGradientTo}`}
        >
          {header}
        </h2>
        <IoChevronForwardOutline
          className={`flex size-8 rounded-full ring-2 ring-teal-200 hover:animate-pulse transition-all duration-300 cursor-pointer ${
            show ? 'rotate-90' : 'rotate-0'
          }`}
          onClick={() => setShow(!show)}
        />
      </div>
      {bottomGradientFrom && bottomGradientTo && (
        <div
          className={`w-4/6 h-1 my-4 bg-gradient-to-r ${bottomGradientFrom} ${bottomGradientTo}`}
        />
      )}
      <div
        className={`${
          show ? `${expandHeight} my-4` : 'h-0 my-0'
        } overflow-hidden w-4/6 transition-all duration-500`}
      >
        {children}
      </div>
    </>
  )
}
