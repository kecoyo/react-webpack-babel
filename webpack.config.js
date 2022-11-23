const path = require('path');
const webpack = require('webpack'); // webpack核心
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 将CSS提取出来，而不是和js混在一起
// eslint-disable-next-line import/no-unresolved
const WebpackBarPlugin = require('webpackbar'); // 进度条
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const { EnvironmentPlugin } = webpack;

const isProd = process.env.NODE_ENV === 'production';

const webpackConfig = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'cheap-module-source-map' : 'eval-cheap-module-source-map',
  entry: [
    './src/index.js', // your app's entry point
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.less'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|public\/)/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            ['@babel/plugin-transform-runtime'], //
            ['import', { libraryName: 'antd-mobile', libraryDirectory: 'es/components' }, 'antd-mobile'],
          ],
        },
      },
      {
        test: /\.css$/,
        use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|xml)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: 'static/images',
              outputPath: 'static/images',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          symbolId: '[hash]', // 避免重名问题
          esModule: false,
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    compress: true,
    hot: true,
    proxy: [
      {
        context: ['/cc', '/Net'],
        target: 'https://cs.ljlx.com/api/',
        secure: false,
        changeOrigin: true,
      },
    ],
  },
  plugins: [
    new SpeedMeasurePlugin(),
    new CleanWebpackPlugin(),
    new EnvironmentPlugin({
      CSS_PREFIX: 'lsf-',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'static' }],
    }),
    new WebpackBarPlugin(), // 打包时美化进度条
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[chunkhash:8].css', // 生成的文件名
      chunkFilename: 'static/css/[name].[chunkhash:8].chunk.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

module.exports = webpackConfig;
