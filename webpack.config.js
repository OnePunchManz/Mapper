const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/env"]
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
