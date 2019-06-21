import React from 'react'
import * as S from './style'
import { Container, H1 } from '../Globals'
import { PrimaryButton } from '../Button'

const Hero = () => (
  <S.Hero>
    <Container>
      <H1>Hi, I'm Ümit.</H1>
      <S.Lead>
        Currently 4-year computer engineering student and front end developer based in Istanbul. I love learning new
        technologies at development and I'm a huge fan of minimalism.
      </S.Lead>
      <PrimaryButton>More about me</PrimaryButton>
    </Container>
  </S.Hero>
)

export default Hero
