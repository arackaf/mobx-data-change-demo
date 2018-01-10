const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./index.js"
  },
  output: {
    filename: "index-bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["es2015", { modules: false }], "stage-2", "react"],
            plugins: ["transform-decorators-legacy"]
          }
        }
      }
    ]
  }
};
