import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'wx-js-sdk.js',
    library: "wxJsSdk",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: ['*', '.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};

export default config;