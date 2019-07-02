import React from 'react'
import { Grid, Cell } from 'styled-css-grid'
import { Container } from '../Globals'

import { posts } from '../../static/posts'
import Post from './Post'

export default props => {
  const { item } = props

  const latestPosts = posts.slice(posts.length - item, posts.length)
  latestPosts.reverse()

  return (
    <Container>
      <Grid columns={3} gap="15px">
        {latestPosts.map((post, i) => (
          <Cell key={i}>
            <Post post={post} />
          </Cell>
        ))}
      </Grid>
    </Container>
  )
}
