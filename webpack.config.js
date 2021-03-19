//entry -> output
const fs = require('fs');
const webpack = require('webpack');
const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
  const isProdution = env === "production";


  // console.log(isProdution);
  return {
    entry: "./src/app.js",
    // entry: './src/playground/hoc.js',
    output: {
      path: path.join(__dirname, "./public"),
      filename: "bundle.js",
    },
    devtool: isProdution ? "source-map" : "cheap-module-eval-source-map",
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.jsx?$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader?url=false", "sass-loader"],
        },
        {
          test: /\.(png|jpg)$/,
          include: path.join(__dirname, "img"),
          loader: "url-loader?limit=1000000000",
        },
        {
          test: /\.(jpg|jpeg|png)$/,
          loader: "file-loader",
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "svg-url-loader",
              options: {
                limit: 10000,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new Dotenv(),
    ],
    devServer: {
      contentBase: path.join(__dirname, "./public"),
      historyApiFallback: true,
      port: 9010,
      // historyApiFallback: true,
    },
  };
};
