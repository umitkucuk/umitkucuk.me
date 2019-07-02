import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as S from './style'
import { Container, H1, H4 } from '../Globals'
import { PrimaryLink } from '../Button'

const Footer = () => (
  <S.Footer>
    <Container>
      <S.GetInTouch>
        <H1>Get in touch</H1>
        <H4>
          Do you have a project idea or just a question? <br /> Feel free to contact me.
        </H4>
        <PrimaryLink href="mailto:umittkucukk@gmail.com">Email me</PrimaryLink>
        <S.SocialLinks>
          <S.SocialLink href="https://github.com/umitkucuk" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </S.SocialLink>
          <S.SocialLink href="https://www.instagram.com/umitkucukk" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </S.SocialLink>
          <S.SocialLink href="https://m.me/umittkucukk" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'facebook-messenger']} />
          </S.SocialLink>
        </S.SocialLinks>
      </S.GetInTouch>
      <S.Copyright>
        <p>
          Copyright © {new Date().getFullYear()} Ümit Küçük.
          <Link href="/">
            <a>
              It was built with much <span>❤</span>
            </a>
          </Link>
        </p>
      </S.Copyright>
    </Container>
  </S.Footer>
)

export default Footer
