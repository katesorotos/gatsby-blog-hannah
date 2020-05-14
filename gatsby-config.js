require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'Hannah May',
    author: 'Kate Sorotos'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Hannah May Baldwin',
        short_name: 'HMBaldwin',
        start_url: '/',
        background_color: '#000',
        theme_color: '#353535',
        lang: 'en',
        display: 'standalone',
        icon: path.join(__dirname, 'src', 'images', 'favicon.png'), // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'dc5igw0b41un',
        accessToken: 'QPY7UFhiEnVDgjRmvfpuUAL-1BdvVXG-57DI8Za82CQ',
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
