import styled from 'styled-components'

export const Header = styled.header`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`

export const Logo = styled.a`
  display: inline-block;
  font-size: 2rem;
  font-weight: 600;
  padding: 2rem;
  cursor: pointer;
`

export const Navbar = styled.nav`
  float: right;
  padding: 1rem 0;

  a {
    position: relative;
    color: #111111;
    display: inline-block;
    font-size: 2.2rem;
    font-weight: 700;
    padding: 1.6rem 0;
    margin-left: 2rem;

    &:after {
      content: '';
      height: 0.3rem;
      width: 0;
      position: absolute;
      left: 50%;
      bottom: 10px;
      background: #000;
      visibility: hidden;
      transform: translateX(-50%);
      transition: 0.2s all ease-in-out;
    }

    &:hover {
      &:after {
        width: 100%;
        visibility: visible;
      }
    }

    &.active {
      &:after {
        visibility: visible;
        width: 100%;
      }
    }
  }
`
