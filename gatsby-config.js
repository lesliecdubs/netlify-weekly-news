module.exports = {
  siteMetadata: {
    title: 'Weekly News | Netlify',
    description: 'Check out stats & updates from your week at Netlify'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './data/',
      },
    }, {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /assets\/images\/inline-svgs/
      }
    }
  ]
}
