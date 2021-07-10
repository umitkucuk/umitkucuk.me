import React from 'react'
import * as SVGIcon from 'assets/icons'
import { IconWrapper } from './Icon.style'

export type IconName = 'github' | 'linkedin' | 'twitter'

export interface IconProps {
  name: IconName | string
  size?: number
}

const renderSVG = (name: string) => {
  switch (name) {
    case 'github':
      return <SVGIcon.Github />
    case 'linkedin':
      return <SVGIcon.Linkedin />
    case 'twitter':
      return <SVGIcon.Twitter />
    default:
      return null
  }
}

const Icon = ({ name, ...rest }: IconProps): JSX.Element => {
  return <IconWrapper {...rest}>{renderSVG(name)}</IconWrapper>
}

export default Icon
