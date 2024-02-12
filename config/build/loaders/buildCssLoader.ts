import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { RuleSetRule } from "webpack"
import { BuildOptions } from "../types/types"

export const buildCssLoader = ({isDev}: BuildOptions): RuleSetRule => {
  return {
    test: /\.css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader', 
        options: {
          modules: {
            auto: true,
            localIdentName: "[path][name]__[local]--[hash:base64:5]",
          },
        },
      }
      ],
      
  }
  
}