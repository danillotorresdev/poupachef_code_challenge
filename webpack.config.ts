import path from 'path';
import webpack from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const config: webpack.Configuration = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: './src/**/*',
      },
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '/build'),
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, '/build'),
    compress: true,
    port: 4000,
  },
};

export default config;
