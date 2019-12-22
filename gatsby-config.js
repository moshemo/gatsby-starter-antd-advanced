module.exports = {
  siteMetadata: {
    title: `Gatsby Ant Design Starter`,
    description: `Gatsby Starter featuring Ant Design, Styled Components and an opinionated file structure.`,
    author: `moshemo`,
  },
  plugins: [
    // PLUGINS
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    // SOURCES
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    // TRANSFORMERS
    `gatsby-transformer-sharp`,
  ],
}
