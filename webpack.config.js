const path = require('path');
const webpack = require('webpack');


module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      include: [path.resolve(__dirname, 'src')]
    },
    {
      test: require.resolve("jquery"),
      loader: "expose-loader",
      options: {
        exposes: ["$", "jQuery"],
      },
    },  
  ]
},
output: {
  publicPath:'public',
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'public/assets/js')
},
optimization: {
  usedExports: true,
},
plugins: [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  }),
],
}