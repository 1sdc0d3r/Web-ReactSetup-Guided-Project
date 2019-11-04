var path = require("path");
var BundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  // 'production' mode would minify and uglify the code, and use React's production code

  mode: "development",
  // entry is the starting point for the web made by our files through imports and exports

  entry: path.resolve(__dirname, "index.js"),
  // all code will get concatenated into a single bundle.js inside a bundle folder

  output: {
    path: path.resolve(__dirname, "bundle"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  // types of files we want Webpack to bundle

  resolve: {
    extensions: [".js", ".jsx", ".less", ".css", ".sass"]
  },
  plugins: [new BundleAnalyzer()],
  devServer: {
    publicPath: path.resolve(__dirname, "/bundle/"),
    historyApiFallback: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
      /* {
        test: /\.sass$/,
        exclude: /node_modules/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
          {loader: 'sass-loader'}
        ]
      } */
    ]
  }
};
