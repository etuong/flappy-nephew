// const path = require('path');

// module.exports = {
//   context: __dirname,
//   entry: './lib/flappy_sheen.js',
//   output: {
//     path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
//     filename: './lib/bundle.js'
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '*']
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         exclude: /(node_modules)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015']
//         }
//       }
//     ]
//   },
//   devtool: 'source-map'
// };

module.exports = {
    entry: "./lib/flappy_sheen.js",
    output: {
        filename: "./lib/bundle.js"
    },
    devtool: 'source-map',
  };
  