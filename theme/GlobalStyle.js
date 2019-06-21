import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  a {
    transition: 0.1s all ease-in-out;
    text-decoration: none;
  }

  ::selection {
    background: #f2f2f2;
  }

  ::-moz-selection {
    background: #f2f2f2;
  }

  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: #000;
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }

  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #4b9cd3, 0 0 5px #4b9cd3;
    opacity: 1.0;
    transform: rotate(3deg) translate(0px, -4px);
  }
`

export default GlobalStyle
