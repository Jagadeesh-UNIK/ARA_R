const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point to your app
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // The output bundled file
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Use Babel to transpile JS files
        },
      },
      {
        test: /\.css$/, // Rule for CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // HTML template to inject the bundle
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // This replaces contentBase
    },
    port: 3000, // The port on which the dev server will run
    open: true, // Open the browser automatically
    hot: true, // Enable Hot Module Replacement
  },
  mode: "development", // Set mode to development
};
