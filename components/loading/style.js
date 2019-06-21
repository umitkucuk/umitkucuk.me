import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  
  100% {
    background-position: 468px 0; 
  }
`

export const PostCard = styled.div`
  background-color: #fff;
  border-radius: .4rem;
  box-shadow: 0 .2rem 1.2rem 0 rgba(0,0,0,.08);
`

export const ShimmerPostCardImage = styled.div`
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-size: 99% 100%;
  background-repeat: no-repeat;
  clear: both;
  display: inline-block;
  width: 100%;
  height: 25rem;
  animation: ${shimmer} 1s linear 1ms infinite forwards;
  position: relative;
`