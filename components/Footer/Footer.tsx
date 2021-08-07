import { Icon } from 'components'
import { convertToRomanNumber } from 'utils'
import {
  StyledFooter,
  EmailLink,
  SocialLinks,
  SocialLink,
} from './Footer.style'

const Footer = () => {
  return (
    <StyledFooter>
      <h1>Get in touch</h1>
      <EmailLink href="mailto:hi@umitkucuk.me">hi@umitkucuk.me</EmailLink>

      <SocialLinks>
        <SocialLink
          href="https://twitter.com/umitcodes"
          title="My Twitter profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Icon name="twitter" size={2.4} />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/umit-kucuk/"
          title="My LinkedIn profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Icon name="linkedin" size={2.4} />
        </SocialLink>
        <SocialLink
          href="https://github.com/umitkucuk"
          title="My GitHub profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Icon name="github" size={2.4} />
        </SocialLink>
        <SocialLink
          href="https://open.spotify.com/user/umitkucuk"
          title="My Spotify profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Spotify"
        >
          <Icon name="spotify" size={2.4} />
        </SocialLink>
      </SocialLinks>

      <p>
        ©{convertToRomanNumber(new Date().getFullYear())}. All lefts reserved.{' '}
        <a
          href="https://github.com/umitkucuk/umitkucuk.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code.
        </a>
      </p>
    </StyledFooter>
  )
}

export default Footer
