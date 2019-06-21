import styled from 'styled-components'

export const PostCard = styled.div`
  background-color: #fff;
  border-radius: 0.4rem;
  display: block;
  overflow: hidden;
  -webkit-transition: 0.25s all ease-in-out;
  transition: 0.3s all ease-in-out;

  &:hover {
    background-color: #f2f2f2;
  }

  a {
    display: block;
  }
`

export const PostThumbnail = styled.img`
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;
  background-color: #f2f2f2;
`

export const PostTag = styled.span`
  color: #000;
  margin-right: 0.5rem;
`

export const PostDate = styled.span`
  color: red;
  margin-left: 0.5rem;
`
