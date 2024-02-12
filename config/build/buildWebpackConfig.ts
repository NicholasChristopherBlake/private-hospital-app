import { Configuration } from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { BuildOptions } from './types/types';


export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const {isDev, paths} = options;

  return {
    mode: isDev ? 'development' : 'production',
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    // optimization: {
    //   minimizer: [
    //     ...,
    //     new Css
    //   ]
    // }
  };
}