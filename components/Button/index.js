import styled, { css } from 'styled-components'

const button = css`
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
  outline: none;
  padding: 1rem 2.5rem;
  text-align: center;
  -webkit-transition: 0.25s all ease-in-out;
  transition: 0.25s all ease-in-out;
  white-space: nowrap;
  word-break: keep-all;
`

export const PrimaryButton = styled.button`
  ${button};
  color: #fff;
  background-color: ${props => props.theme.color.primary};

  &:hover {
    opacity: 0.9;
  }
`

export const SecondaryButton = styled.button`
  ${button};
  color: #fff;
`

export const PrimaryLink = styled.a`
  ${button};
  color: #fff;
  background-color: ${props => props.theme.color.primary};

  &:hover {
    opacity: 0.9;
  }
`
