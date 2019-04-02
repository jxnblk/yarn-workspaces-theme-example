const path = require('path')
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: path.join(__dirname, 'src/pages'),
      }
    },
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: [
          'gatsby-theme-example-workspaces',
        ]
      }
    },
  ],
}
