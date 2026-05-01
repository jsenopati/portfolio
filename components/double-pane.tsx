import { ReactNode } from 'react'
import { Button } from './button'
import { IoLayers } from 'react-icons/io5'

type DoublePaneProps = {
  header: string
  header2?: string
  side?: 'left' | 'right'
  description?: string | ReactNode
  description2?: string
  children: ReactNode
  padding?: string
  margin?: string
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
  header2,
  description,
  description2,
  children,
  padding = 'py-20',
  margin = 'my-4 md:my-16',
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

  return (
    <section
      className={`flex flex-col ${flexDirection} h-full w-full items-center ${padding} md:gap-20`}
    >
      <div
        className={`flex h-fit w-full flex-col ${textContentWidth} text-pretty ${textContentYSpacing} ${margin} ${textContentPadding}`}
      >
        {tagText && (
          <div className="border-gray flex h-fit w-fit items-center justify-center rounded-xl border-2 px-3 py-1 font-bold">
            <IoLayers className="ml-[-4px] text-3xl text-teal-300" />
            <h3 className="ml-2 text-purple-300">{tagText}</h3>
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
        className={`flex h-full w-full items-center justify-center ${imageContentWidth} ${margin} relative`}
      >
        {children}
      </div>
    </section>
  )
}
