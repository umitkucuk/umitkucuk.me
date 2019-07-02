const nextMDX = require('@zeit/next-mdx')
const bundleAnalyzer = require('@next/bundle-analyzer')

const withMDX = nextMDX({
  extension: /\.mdx?$/
})

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })

const nextConfig = {
  target: 'serverless',
  pageExtensions: ['jsx', 'js', 'mdx'],
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  }
}

module.exports = withMDX(withBundleAnalyzer(nextConfig))
