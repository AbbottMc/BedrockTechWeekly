const path = require('path');

module.exports = {
  mode: "none",
  target: "node",
  entry: {
    main: './gen/Main.ts',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  devServer: {
    static: './build',
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  node: {
    __dirname: false,
    __filename: false
  }
};