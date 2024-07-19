const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    publicPath: "public",
    filename: "main.js",
    path: path.resolve(__dirname, "public"),
  },
};
