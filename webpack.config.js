const path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}

module.exports = env => {
  if (env.mode === 'development') {
    config.devtool = 'source-map'
  } else {
    config.devtool = 'cheap-source-map'
  }
  config.mode = env.mode
  return config
}
