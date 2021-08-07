import styled from 'styled-components'

export const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  padding: 0.8rem 1.6rem;
  opacity: 0.6;
  border-radius: 0.8rem;
  transition: 200ms ease-in all;
  outline: 0;

  &:hover,
  &:focus {
    opacity: 1;
  }
`
