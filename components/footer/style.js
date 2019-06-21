import styled, { keyframes } from 'styled-components'

const pumping = keyframes`
  0% {
    transform: scale(1.0);
  }
  20% {
    transform: scale(1.3);
  }
  30% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
`

export const Footer = styled.footer`
  width: 100%;
`

export const GetInTouch = styled.div`
  text-align: center;
  border-top: 0.1rem solid #f3f3f3;
  padding: 4rem 0;
`

export const SocialLinks = styled.div`
  position: relative;
  text-align: center;
  margin-top: 2rem;
`

export const SocialLink = styled.a`
  display: inline-block;
  color: ${props => props.theme.color.primary};
  font-size: 3rem;
  padding: 0.5rem;
  margin-right: 2rem;

  &:hover {
    opacity: 0.8;
  }
`

export const Copyright = styled.div`
  text-align: center;

  & > p {
    & > a {
      display: inline-block;
      color: #000;
      padding: 0.2rem;
      text-decoration: underline;

      & > span {
        position: relative;
        display: inline-block;
        color: red;
      }

      &:hover {
        text-decoration: none;
        & > span {
          animation: ${pumping} 1s linear 1ms infinite forwards;
        }
      }
    }
  }
`
