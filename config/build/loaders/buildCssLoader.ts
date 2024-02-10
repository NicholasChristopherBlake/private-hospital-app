import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { RuleSetRule } from "webpack"

export const buildCssLoader = (): RuleSetRule => {
  return {
    test: /\.css$/i,
    use: [
      {
        // loader: 'style-loader',
        loader: MiniCssExtractPlugin.loader,
      }
      , 
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