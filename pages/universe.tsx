import dynamic from 'next/dynamic'

const Space = dynamic(() => import('components/Space'), { ssr: false })

const Universe = () => {
  return (
    <>
      <Space />
    </>
  )
}

export default Universe
