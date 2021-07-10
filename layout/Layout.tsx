import { Header, Footer } from 'components'
import { Main, LayoutContainer } from './Layout.style'

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <Main>
        <LayoutContainer>{children}</LayoutContainer>
      </Main>
      <Footer />
    </>
  )
}

export default Layout
