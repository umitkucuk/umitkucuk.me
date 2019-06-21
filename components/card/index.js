import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fafafa;
  border-radius: .4rem;
  display: block;
  overflow: hidden;
  -webkit-transition: .2s all ease-in-out;
  transition: .2s all ease-in-out;

  &:hover {
    
  }

  a {
    display: block;
  }

  img {
    width: 100%;
    margin-bottom: 0;
  }
`
export const CardContent = styled.div`
  padding: 2rem;
`