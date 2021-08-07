import styled, { keyframes } from 'styled-components'

const twinkMove = keyframes`
  from { background-position: 0 0; }
  
  to { background-position: -10000px 5000px; }
`

export const SpaceWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`

export const Stars = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: #000 url('/img/stars.png') repeat top center;
`

export const Twinkling = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
  animation: ${twinkMove} 600s linear infinite;
  background: transparent url('/img/twinkling.png') repeat top center;

  @media only screen and (max-width: 800px) {
    background-size: 80px;
  }
`

export const YouTubeWrapper = styled.div`
  opacity: 0;
  visibility: hidden;
  z-index: -1;
`

export const PlayPauseButton = styled.button`
  display: inline-block;
  position: absolute;
  font-size: 4.8rem;
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  border: 0;
  background-color: #fff;
  z-index: 2;
  top: calc(50% - 18rem / 2);
  left: calc(50% - 18rem / 2);
  opacity: 0.6;
  outline: 0;
  transition: 200ms ease-in all;
  text-align: center;
  cursor: pointer;
  padding: 0;

  &:hover,
  &:focus {
    opacity: 1;
  }

  @media only screen and (max-width: 800px) {
    font-size: 4rem;
    width: 12rem;
    height: 12rem;
    top: calc(50% - 12rem / 2);
    left: calc(50% - 12rem / 2);
  }
`

export const GoBackLink = styled.div`
  position: absolute;
  top: 1.6rem;
  left: 1.6rem;
  z-index: 2;
`

export const SongLink = styled.a`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  text-align: center;
  width: 24rem;
  padding: 0.8rem 0;
  position: absolute;
  bottom: 1.6rem;
  left: calc(50% - 24rem / 2);
  z-index: 2;
  opacity: 0.6;
  border-radius: 0.8rem;
  transition: 200ms ease-in all;
  outline: 0;

  &:hover {
    opacity: 1;
  }
`
