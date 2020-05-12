module.exports = {
  siteMetadata: {
    title: 'Hannah May Baldwin',
    author: 'Kate Sorotos'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ]
}
