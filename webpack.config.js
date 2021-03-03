const path = require('path');
const postcssPlugins = [
  require ('postcss-simple-vars'),
  require ('postcss-nested'),
  require ('autoprefixer')
]

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundled.js',
  },
  devServer: {
    before: function (app, server) {
      server._watch('./app/**/*.html');
    },
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 3000,
    host: '0.0.0.0'
  },
  mode: 'development',
  /* the 'watch' property is not needed while devServer is configured
  watch: true, */
  module: {
    rules: [
      {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postcssPlugins}}}]
      }
    ]
  }
};