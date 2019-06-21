const nextMDX = require('@zeit/next-mdx')
const bundleAnalyzer = require('@next/bundle-analyzer')

const withMDX = nextMDX({
  extension: /\.mdx?$/
})

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })

const nextConfig = {
  target: 'serverless',
  pageExtensions: ['jsx', 'js', 'mdx']
}

module.exports = withMDX(withBundleAnalyzer(nextConfig))
