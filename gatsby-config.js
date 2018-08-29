module.exports = {
  siteMetadata: {
    title: 'Weekly News | Netlify',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './data/',
      },
    }
  ]
}
