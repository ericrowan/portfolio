const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: "Eric Rowan",
    titleTemplate: "%s | Design & Front-end",
    description:
      "I design and build websites, apps, ideas, and other useful tools.",
    url: "https://ericrowan.com", // No trailing slash allowed!
    image: "/images/portrait.jpg", // Path to your image you placed in the 'static' folder
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
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
  ],
}
