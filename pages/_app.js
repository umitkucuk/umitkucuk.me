import React from 'react'
import App, { Container } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faFacebook, faTwitter, faInstagram, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faFacebook, faTwitter, faInstagram, faFacebookMessenger)

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
