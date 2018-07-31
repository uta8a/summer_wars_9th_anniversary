
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const globImporter = require('node-sass-glob-importer')

const MODE = process.env.MODE || 'development'
const enabledSourcemap = (MODE === 'development')

const js = {
  mode: MODE,
  entry: `${ __dirname }/src/scripts/app.js`,
  output: {
    path: `${ __dirname }/public/scripts`,
    filename: 'app.min.js'
  }
}

const css = {
  mode: MODE,
  entry: `${ __dirname }/src/scss/style.scss`,
  output: {
    path: `${ __dirname }/public/stylesheets`,
    filename: 'style.css'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: enabledSourcemap,
                minimize: !enabledSourcemap,
                importLoaders: 2
              }
            },
            {
              loader: 'sass-loader',
              options: {
                importer: globImporter(),
                sourceMap: enabledSourcemap
              }
            }
          ]
        })
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
}

module.exports = [js, css]