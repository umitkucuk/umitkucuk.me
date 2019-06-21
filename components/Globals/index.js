import styled, { css } from 'styled-components'

const Heading = css`
  color: #000;
  margin: 0 0 1.5rem 0;
  padding: 0;
`
export const Unselectable = css`
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`

export const H1 = styled.h1`
  ${Heading}
  font-size: 4rem;
  font-weight: 900;
`

export const H2 = styled.h2`
  ${Heading}
  font-size: 3rem;
  font-weight: 900;
`

export const H4 = styled.h4`
  ${Heading}
  font-size: 1.8rem;
  font-weight: 700;
`

export const Container = styled.div`
  max-width: 120rem;
  margin-right: auto;
  margin-left: auto;
`
