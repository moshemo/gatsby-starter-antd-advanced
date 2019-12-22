module.exports = {
  siteMetadata: {
    title: `Gatsby Ant Design Starter`,
    description: `Gatsby Starter featuring Ant Design, Styled Components and a well-organized folder structure.`,
    author: `moshemo`,
  },
  plugins: [
    // PLUGINS
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          // 'primary-color': '#663399',
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-antd`,
        short_name: `AntD Starter`,
        start_url: `/`,
        background_color: `#454545`,
        theme_color: `#454545`,
        display: `minimal-ui`,
        icon: `src/assets/img/manifest-icon.png`, // This path is relative to the root of the site.
      },
    },

    // SOURCES
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },

    // TRANSFORMERS
    `gatsby-transformer-sharp`,
  ],
}
