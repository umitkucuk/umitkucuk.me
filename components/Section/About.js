import React from 'react'
import { Grid, Cell } from 'styled-css-grid'

import { Container } from '../Globals'
import { SectionTitle, SectionLead } from './style'

const About = () => (
  <Container>
    <Grid columns={2} gap="30px">
      <Cell>
        <SectionTitle>About Me</SectionTitle>
        <SectionLead>My name is Ümit.</SectionLead>
      </Cell>
    </Grid>
  </Container>
)

export default About
