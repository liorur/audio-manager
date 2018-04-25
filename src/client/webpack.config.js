const path = require('path');
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const version = require('../../package.json').version;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const projectRoot = path.join(__dirname, '..', '..');

const plugins = [
  new HtmlWebpackPlugin(
    {
      hash: true,
      myPageHeader: 'Hello World',
      template: 'index.ejs',
      filename: 'index.html', //relative to root of the application
      title: 'Audio Manager',
      // // favicon: 'favicon.ico',
      //  filename: 'index.html',
      //  template: 'index.ejs'
    }),
];

if (!IS_PRODUCTION) {
  plugins.push(new OpenBrowserPlugin({url: `http://localhost:3000/public/`}));
}

module.exports = {
  mode: IS_PRODUCTION ? 'production' : 'development',
  devtool: IS_PRODUCTION ? '' : 'inline-source-map',
  entry: [/*'babel-polyfill',*/ './index'],
  output: {
    path: path.join(projectRoot, 'dist', 'public'),
    filename: `[name]-${version}-bundle.js`,
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: 'style-loader'
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         camelCase: true,
      //         sourceMap: !IS_PRODUCTION,
      //         minimize: IS_PRODUCTION
      //       }
      //     }
      //   ]
      // },
      {
        test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/,
        use: 'url-loader?limit=10000'
      }
    ]
  },
  plugins
};