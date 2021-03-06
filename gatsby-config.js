module.exports = {
  siteMetadata: {
    title: "Gatsby Spectral Starter",
    author: "Said Aitmbarek",
    description: "A Gatsby.js Starter for Spectral by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
