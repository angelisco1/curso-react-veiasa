const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const sourcePath = path.join(__dirname, 'src');
const outputPath = path.join(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: path.join(sourcePath, 'index.js'),
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(mp4)/,
        exclude: /node_modules/,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, 'public', 'index.html'),
      title: 'Curso de React'
    })
  ],
  devServer: {
    static: outputPath
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}