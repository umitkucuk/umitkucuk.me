import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, light } from 'theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        {/* <title>Ümit Küçük — Front-End Engineer</title> */}
        <title>Ümit Küçük — Front-End Engineer</title>
        <meta
          name="description"
          content="The personal website of Ümit Küçük, Front-End Engineer."
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={light}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
