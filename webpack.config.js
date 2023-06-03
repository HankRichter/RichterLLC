const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { app: "/app/index.js" },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "app"),
    },
    extensions: [".js", ".jsx"],
  },
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./app/index.html",
      filename: "./index.html",
    }),
  ],
};
