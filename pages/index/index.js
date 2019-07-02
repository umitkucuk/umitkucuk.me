import React from 'react'
import Page from '../../components/page'
import Hero from '../../components/Hero'
// import LatestCases from '../../components/Section/LatestCases'
import LatestBlog from '../../components/LatestBlog'

export default () => {
  return (
    <Page title="Index Page">
      <Hero />
      {/* <LatestCases /> */}
      <LatestBlog item={3} />
    </Page>
  )
}
