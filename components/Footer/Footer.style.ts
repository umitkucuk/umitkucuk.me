import styled from 'styled-components'

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1240px;
  margin: 0 auto;
`

export const EmailLink = styled.a`
  color: #fff;
  background-color: #000;
  border-radius: 0.8rem;
  padding: 0.8rem 1.6rem;
  text-decoration: none;
  border: 0;

  &:hover {
    opacity: 0.8;
  }
`

export const SocialLinks = styled.div`
  display: block;
  padding: 1.6rem 0;
`

export const SocialLink = styled.a`
  display: inline-block;
  color: #000;
  padding: 0.8rem 1.6rem;
  border: 0;

  &:hover {
    opacity: 0.8;
  }
`
