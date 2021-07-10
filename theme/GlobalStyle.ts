import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Literata', serif;
    font-weight: 600;
  }

  h1 {
    margin: 0 0 1.6rem 0;
    box-sizing: border-box;
  }

  p {
    margin: 0 0 0.8rem 0;
  }

  a {
    color: #000;
    text-decoration: none;
    padding: 0.2rem 0.4rem;
    box-sizing: border-box;
    border-bottom: 2px solid #000;

    &:hover {
      opacity: 0.8;
    }
  }
`

export default GlobalStyle
