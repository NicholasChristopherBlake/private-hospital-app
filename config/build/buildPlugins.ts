import HtmlWebpackPlugin from "html-webpack-plugin"
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from "webpack"
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import StatoscopeWebpackPlugin from '@statoscope/webpack-plugin';
import { BuildOptions } from "./types/types"

export const buildPlugins = ({paths, isDev, analyze}: BuildOptions): WebpackPluginInstance[] => {
  const plugins = [
    new ProgressPlugin(),
    new HtmlWebpackPlugin(
    {
      template: paths.html
    }
    ),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
    }),
    new DefinePlugin({
      __IS_DEV__: isDev
    })
  ]

  // if(isDev) {}
  
  if(analyze) {
    plugins.push(new StatoscopeWebpackPlugin())
  }

  return plugins
}