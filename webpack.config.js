const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
  mode:'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[hash].js',

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
    module:{
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',

        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          //Aqui deve seguir esta ordem, sendo o style-loader primeiro e em seguida o css-loader.
          use: ['style-loader',
          {
            loader:'css-loader',
            options: {
              modules: true,
            },
          }, 
          'sass-loader',
         ],
         
        },
      ],
    },
  devServer:{
    port: 3000,
  },
};

