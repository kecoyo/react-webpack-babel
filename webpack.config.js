const path = require('path');
const webpack = require('webpack'); // webpack核心
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 将CSS提取出来，而不是和js混在一起
// eslint-disable-next-line import/no-unresolved
const WebpackBarPlugin = require('webpackbar'); // 进度条

const isProd = process.env.NODE_ENV === 'production';

const miniCssExtractLoader = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: '../../',
  },
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        [
          'postcss-preset-env',
          {
            // Options
          },
        ],
      ],
    },
  },
};

const lessLoader = {
  loader: 'less-loader',
  options: {
    lessOptions: {
      javascriptEnabled: true,
      math: 'always',
    },
  },
};

const webpackConfig = {
  mode: isProd ? 'production' : 'development',
  // devtool: isProd ? 'cheap-module-source-map' : 'eval-cheap-module-source-map',
  devtool: isProd ? 'source-map' : 'cheap-module-source-map',
  entry: [
    './src/index.js', // your app's entry point
  ],
  output: {
    publicPath: '',
    path: path.resolve(__dirname, 'public'),
    filename: isProd ? 'static/js/[name].[contenthash:8].js' : 'static/js/bundle.js',
    chunkFilename: isProd ? 'static/js/[name].[contenthash:8].chunk.js' : 'static/js/[name].chunk.js',
    assetModuleFilename: 'static/media/[name].[hash][ext]',
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
        use: [isProd ? miniCssExtractLoader : 'style-loader', 'css-loader', postcssLoader],
      },
      {
        test: /\.less$/,
        use: [isProd ? miniCssExtractLoader : 'style-loader', 'css-loader', postcssLoader, lessLoader],
      },
      {
        test: /\.(png|jpe?g|gif)_?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 最大限制，小于限制转换Base64
          },
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: '[hash]', // 避免重名问题
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    client: {
      overlay: { errors: true, warnings: false },
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
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: 'static' }],
    }),
    new webpack.EnvironmentPlugin({
      CSS_PREFIX: 'lsf-',
    }),
    new WebpackBarPlugin(), // 打包时美化进度条
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
  ],
};

module.exports = webpackConfig;
