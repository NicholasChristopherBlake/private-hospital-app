import { RuleSetRule } from "webpack"
import { buildCssLoader } from "./loaders/buildCssLoader"

export const buildLoaders = (): RuleSetRule[] => {
  const tsLoader = {
    test: /\.([cm]?ts|tsx)$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const cssLoader = buildCssLoader();

  return [tsLoader, cssLoader]
}