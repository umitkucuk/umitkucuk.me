import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { StyledLink } from './Link.style'

export interface LinkProps extends NextLinkProps {
  children?: React.ReactNode
}

const Link = ({ children, ...props }: LinkProps) => {
  return (
    <NextLink {...props} passHref>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  )
}

export default Link
