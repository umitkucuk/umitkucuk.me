import React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'

import Case from './Case'
import { Container } from '../Globals'
import { SectionTitle } from './style'

const CaseStudies = () => (
  <Container>
    <Row>
      <Col lg={12}>
        <SectionTitle>Latest Cases</SectionTitle>
      </Col>
    </Row>
    <Row>
      <Col lg={6}>
        <Case />
      </Col>
    </Row>
  </Container>
)

export default CaseStudies
