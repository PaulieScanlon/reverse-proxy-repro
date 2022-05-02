require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: '/demos/rise-of-the-robots',
  plugins: ['gatsby-plugin-gatsby-cloud'],
}
