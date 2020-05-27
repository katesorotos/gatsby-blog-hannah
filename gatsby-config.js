require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const dotenv = require('dotenv')
if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}


module.exports = {
  siteMetadata: {
    title: 'Hannah May',
    owner: 'Hannah May Baldwin',
    developer: 'Kate Sorotos',
    email: 'hannahmaybaldwin@email.com',
    twitterHandle: '@swashata',
		url: 'https://swas.io',
    social: {
      instagram: 'hannahmaybaldwin',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-smoothscroll`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'gh2sg2ozxgsh',
        accessToken: 'zOUiOTrfdR4IrosdRndCmsSy5bylZ-u4414Whv8t7b0',
        // acessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`
      }
    },
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
    },
    '@contentful/gatsby-transformer-contentful-richtext',
  ],
}
