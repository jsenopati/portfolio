import { ReactNode } from 'react'
import Image from 'next/image'
import { Button } from './button'
import { IoLayers } from 'react-icons/io5'

type DoublePaneProps = {
  header: string
  side?: 'left' | 'right'
  description?: string | ReactNode
  description2?: string
  imageSrc?: any
  content?: ReactNode
  padding?: string
  margin?: string
  defaultSizes?: 'lg' | 'xl'
  extraTextContent?: ReactNode
  textContentYSpacing?: string
  textContentPadding?: string
  textContentWidth?: string
  imageContentWidth?: string
  headerTextSize?: string
  headerTextWeight?: string
  headerTextColor?: string
  descTextSize?: string
  descTextWeight?: string
  descTextColor?: string
  buttonTitle?: string
  buttonColor?: 'blue' | 'red'
  buttonInHref?: string
  buttonExHref?: string
  buttonOnClick?: () => void
  tagText?: string
}

export const DoublePane = ({
  side = 'left',
  header,
  description,
  description2,
  imageSrc,
  content,
  padding = 'py-20',
  margin = 'my-4 md:my-16',
  defaultSizes,
  extraTextContent,
  textContentYSpacing = 'space-y-4',
  textContentPadding = 'md:pr-4',
  textContentWidth = 'md:w-1/2',
  imageContentWidth = 'md:w-1/2',
  headerTextSize,
  headerTextWeight = 'font-semibold',
  headerTextColor = 'text-black',
  descTextSize,
  descTextWeight = 'font-normal',
  descTextColor = 'text-black/80',
  buttonTitle,
  buttonColor = 'blue',
  buttonInHref,
  buttonExHref,
  buttonOnClick,
  tagText,
}: DoublePaneProps) => {
  const flexDirection = side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'

  if (defaultSizes === 'lg') {
    headerTextSize = 'text-4xl md:text-3xl xl:text-4xl 2xl:text-5xl'
    descTextSize = 'text-xl md:text-lg 2xl:text-xl !leading-relaxed'
  }
  if (defaultSizes === 'xl') {
    headerTextSize = 'text-5xl md:text-4xl xl:text-5xl 2xl:text-6xl'
    descTextSize = 'text-xl md:text-xl 2xl:text-2xl !leading-loose'
  }
  return (
    <section
      className={`flex flex-col ${flexDirection} items-center w-full h-full ${padding} md:gap-20 `}
    >
      <div
        className={`flex flex-col w-full h-fit ${textContentWidth} text-pretty ${textContentYSpacing} ${margin} ${textContentPadding}`}
      >
        {tagText && (
          <div className="flex justify-center items-center h-fit w-fit px-3 py-1 border-2 border-gray rounded-xl font-bold">
            <IoLayers className="text-teal-300 text-3xl ml-[-4px]" />
            <h3 className="text-purple-300 ml-2">{tagText}</h3>
          </div>
        )}
        <h2
          className={`${headerTextSize} ${headerTextWeight} ${headerTextColor}`}
        >
          {header}
        </h2>
        {description && (
          <p className={`${descTextSize} ${descTextWeight} ${descTextColor}`}>
            {description}
          </p>
        )}
        {description2 && (
          <p className={`${descTextSize} ${descTextWeight} ${descTextColor}`}>
            {description2}
          </p>
        )}
        {extraTextContent && extraTextContent}

        {buttonTitle && (
          <div className="pt-4">
            <Button
              title={buttonTitle}
              bgColor={buttonColor}
              inHref={buttonInHref}
              exHref={buttonExHref}
              onClick={buttonOnClick}
            />
          </div>
        )}
      </div>
      <div
        className={`flex items-center justify-center w-full h-full ${imageContentWidth} ${margin} relative`}
      >
        {content && content}
        {imageSrc && <Image src={imageSrc} alt="" className="w-full h-full" />}
      </div>
    </section>
  )
}
