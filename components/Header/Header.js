import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Grid, Cell } from 'styled-css-grid'
import NavLink from './NavLink'

import { Container } from '../Globals'
import * as S from './style'

// NProgress
Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Header extends React.Component {
  render() {
    return (
      <S.Header>
        <Container>
          <Grid columns={2} gap="15px">
            <Cell>
              <Link href="/">
                <S.Logo src="/static/logo.jpg" alt="Ümit Küçük" />
              </Link>
            </Cell>
            <Cell>
              <S.Navbar>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
              </S.Navbar>
            </Cell>
          </Grid>
        </Container>
      </S.Header>
    )
  }
}

export default Header
