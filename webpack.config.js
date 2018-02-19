const path = require("path");

module.exports = {
  context: path.resolve(__dirname),

  entry: "./app/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        // ☹️  This does not work
        // webpack will not use babel-loader on files located in the /src directory
        // The files inside the /src directory uses JSX, which webpack won't be able to parse without babel-loader
        include: path.resolve(__dirname, "app"),

        // 😀  This works
        // webpack will use babel-loader on files located in the /app and /src directory
        // include: [path.resolve(__dirname, "app"), path.resolve(__dirname, "src")],
      }
    ]
  }
};
