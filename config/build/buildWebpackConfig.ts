import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration, ProgressPlugin } from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';


export const buildWebpackConfig = (): Configuration => {
  return {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    devtool: 'inline-source-map',
    devServer: buildDevServer(),
    plugins: buildPlugins(),
    module: {
      rules: buildLoaders()
    },
    resolve: buildResolvers(),
  };
}