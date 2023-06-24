const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },

  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html5$/i,
        use: ["html-loader"],
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
};
