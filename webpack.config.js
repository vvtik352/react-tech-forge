/* eslint-disable */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MergeJsonWebpackPlugin = require('merge-jsons-webpack-plugin')

const langs = ['ru']

module.exports = {
  entry: './src/index.tsx',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },

  mode: 'development',

  devtool: 'source-map',

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },

  // настройки локального сервера
  devServer: {
    // eslint-disable-next-line no-undef
    static: path.resolve(__dirname, 'build'),
    allowedHosts: 'all',
    compress: false,
    port: 8000,
    open: true,
    hot: true,
    historyApiFallback: true, // для работы react-router-dom
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new MergeJsonWebpackPlugin({
      encoding: 'utf8',
      debug: true,
      output: {
        groupBy: [
          {
            pattern: './src/locales/ru/translation.json',
            fileName: 'locales/ru.json',
          },
        ],
      },
    }),
  ],
}
