const { resolve } = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const config = {
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}

module.exports = env => {
  if (env.mode === 'development') {
    config.devtool = 'source-map'
    config.plugins = [
      new webpack.HotModuleReplacementPlugin()
    ]
  } else {
    config.devtool = 'cheap-source-map'
  }
  config.mode = env.mode
  return config
}
