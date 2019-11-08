const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: "Eric Rowan",
    titleTemplate: "Eric Rowan / %s",
    description:
      "I design and build useful websites, apps, and tools for everyone.",
    url: "https://ericrowan.com", // No trailing slash allowed!
    image: "src/static/images/favicon.svg", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        plugins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
              linkImagesToOriginal: false,
            },
          },
        ],
        defaultLayouts: {
          default: require.resolve(`./src/components/Layout.js`),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-58883853-1",
      },
    },
  ],
}
