import styled from 'styled-components'

export const ProfilePhotoWrapper = styled.div`
  position: relative;
  display: block;
  background-color: #efefef;
  border-radius: 50%;
  overflow: hidden;
  width: 24rem;
  height: 24rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3.2rem;
  text-align: center;

  @media only screen and (max-width: 800px) {
    width: 16rem;
    height: 16rem;
    margin-bottom: 1.6rem;
  }
`
