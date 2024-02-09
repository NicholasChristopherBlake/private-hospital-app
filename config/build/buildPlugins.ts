import HtmlWebpackPlugin from "html-webpack-plugin"
import { ProgressPlugin, WebpackPluginInstance } from "webpack"

export const buildPlugins = (): WebpackPluginInstance[] => {
  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin(
    {
      template: "./public/index.html"
    }
  )]
}