const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = options => {
  const NODE_ENV = process.env.NODE_ENV || 'development';
  const DIST_PATH = path.resolve(__dirname, './dist');
  const devMode = NODE_ENV !== 'production';

  const API_ENV = {
    development: 'http://localhost:4000',
    production: ''
  };
  const ENV = {
    development: 'http://localhost:3000',
    production: ''
  };

  const config = {
    mode: NODE_ENV,
    devtool: 'source-map',
    context: path.resolve(__dirname, './src'),
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
      path: DIST_PATH,
      filename: `main.bundle.js`,
      chunkFilename: `main.chunk.js`,
      publicPath: '/'
    },
    devServer: {
      contentBase: DIST_PATH,
      compress: true,
      historyApiFallback: true,
      port: 3000
    },
    module: {
      rules: [
        // the 'transform-runtime' plugin tells Babel to
        // require the runtime instead of inlining it.
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                mimetype: 'image/png'
              }
            }
          ]
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/svg+xml'
            }
          }
        },
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader:
              'url-loader?limit=10000&minetype=application/font-woff&name=./[hash].[ext]',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff'
            }
          }
        },
        {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader:
              'url-loader?limit=10000&minetype=application/font-woff&name=./[hash].[ext]',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff'
            }
          }
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader:
              'url-loader?limit=10000&minetype=application/font-woff&name=./[hash].[ext]',
            options: {
              limit: 10000,
              mimetype: 'application/octet-stream'
            }
          }
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]'
            }
          }
        }
      ]
    },
    plugins: [
      // enable HMR globally
      new webpack.HotModuleReplacementPlugin(),
      // prints more readable module names in the browser console on HMR updates
      new webpack.NamedModulesPlugin(),
      // clean up the /dist folder
      new CleanWebpackPlugin(['dist'], {
        root: path.resolve(__dirname, './'),
        exclude: [],
        verbose: true,
        dry: false
      }),
      // generate the index.html
      new HtmlWebpackPlugin({
        chunks: ['common', 'app'],
        filename: 'index.html',
        template: `./templates/index.${NODE_ENV}.ejs`,
        hash: true,
        inject: false,
        environment: ENV[NODE_ENV]
      }),
      // define constants
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(NODE_ENV)
        },
        ENVIRONMENT: JSON.stringify(NODE_ENV),
        API_ENVIRONMENT: JSON.stringify(API_ENV[NODE_ENV])
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devMode ? 'main.css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
      })
    ]
  };

  return config;
};
