const path = require("path");
// const ESLintPlugin = require("eslint-webpack-plugin");

require.resolve("./node_modules/events");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|ttf|otf|eot|woff2|svg)$/i,
        loader: "file-loader",
      },
      {
        test: /\.js$/,
        exclude: "/node_module",
        loader: "eslint-loader",
        options: { failOnError: false },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    host: "localhost",
    compress: false,
    port: 9000,
    open: true,
  },
  // plugins: [new ESLintPlugin()],
};
