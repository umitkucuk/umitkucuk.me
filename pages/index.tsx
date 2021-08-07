import Layout from 'layout'
import Link from 'next/link'
import { ProfilePhoto } from 'components'

const Home = () => {
  return (
    <Layout>
      <ProfilePhoto />
      <h1>{`Hi, I'm Ümit Küçük.`}</h1>
      <h1>A Front-End Engineer.</h1>
      <br />
      <p>
        I love creating things that users interact on the web. I am a big fan of
        minimalism and I always try to include it in all my works. I am
        interested in astronomy,{' '}
        <Link href="/universe">
          <a>the universe</a>
        </Link>
        .
      </p>
    </Layout>
  )
}

export default Home
