import React from 'react'
import Page from '../../components/page'
import { Container, H1 } from '../../components/Globals'

export default () => {
  return (
    <Page>
      <Container>
        <H1>Hi there, My name is Ümit.</H1>
        <H1>Nice to meet you.</H1>
        <p>
          I work as a Front-End Developer. I love creating things that users can see and interact with. I am also trying
          learn back-end stuffs to become a Full-Stack Developer
        </p>
        <h4>In my spare time</h4>
        <ul>
          <li>
            I am trying to learn new development technologies. Basically I am reading its documentation and trying
          </li>
          <li>I read cool blog posts about design or development across the internet.</li>
          <li>I look into some opensource projects or boilerplates, and I try to learn their code structures</li>
          <li>I watch popular TV series</li>
        </ul>
        <h4>Things that I love</h4>
        <ul>
          <li>
            playing with my cat{' '}
            <span role="img" aria-label="cat">
              🐈
            </span>
          </li>
          <li>
            ice cream{' '}
            <span role="img" aria-label="ice cream">
              🍨
            </span>
          </li>
          <li>
            cactuses{' '}
            <span role="img" aria-label="cactus">
              🌵
            </span>
          </li>
          <li>
            partying{' '}
            <span role="img" aria-label="partying">
              🎉
            </span>
          </li>
          <li>
            trance music{' '}
            <span role="img" aria-label="music">
              🎵
            </span>
          </li>
        </ul>
      </Container>
    </Page>
  )
}
