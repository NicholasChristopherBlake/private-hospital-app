import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { RuleSetRule } from "webpack"

export const buildCssLoader = (): RuleSetRule => {
  return {
    test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, 
    {
      loader: 'css-loader', 
      options: {
        modules: true
      },}
    ]
  }
}