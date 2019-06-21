import React, { Component } from 'react'
import { Grid, Cell } from 'styled-css-grid'
import { Container } from '../Globals'

import { posts } from '../../static/posts'
import Post from './Post'

export default class LatestBlog extends Component {
  render() {
    const { item } = this.props

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
}
