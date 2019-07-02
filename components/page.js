import React from 'react'
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import GlobalStyle from '../theme/GlobalStyle'
import theme from '../theme/theme'
import Header from './Header'
import Footer from './footer'

import Fonts from '../library/Fonts'

const Main = styled.main`
  position: relative;
  padding-top: 10rem;
`

export default class Page extends React.Component {
  componentDidMount() {
    Fonts()
  }

  render() {
    const { title, description, children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <>
          <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
          </Head>
          <GlobalStyle />
          <Header />
          <Main>{children}</Main>
          <Footer />
        </>
      </ThemeProvider>
    )
  }
}

Page.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired
}

Page.defaultProps = {
  title: 'Ümit Küçük - umitkucuk.me',
  description: 'Ümit Küçük personal website'
}
