import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-styled-flexboxgrid'
import Page from '../components/page'
import { Container } from '../components/Globals'
import { PrimaryButtonLink } from '../components/Button'

const PageNotFound = styled.section`
  text-align: center;
  padding: 5rem 0;
`

const PageNotFoundImage = styled.img`
  width: 30%;
  margin-bottom: 2rem;
`

export default () => {
  return (
    <Page title="Page Not Found - umitkucuk.me">
      <PageNotFound>
        <Container>
          <Row>
            <Col lg={12}>
              <PageNotFoundImage src="/static/page-not-found.png" alt="Page Not Found" />
              <h1>Opps! It looks like you got lost!</h1>
              <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
              <PrimaryButtonLink href="/">Back to home</PrimaryButtonLink>
            </Col>
          </Row>
        </Container>
      </PageNotFound>
    </Page>
  )
}
