import { RuleSetRule } from "webpack"
import { buildCssLoader } from "./loaders/buildCssLoader"
import { BuildOptions } from "./types/types";

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const tsLoader = {
    test: /\.([cm]?ts|tsx)$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const cssLoader = buildCssLoader(options);

  return [tsLoader, cssLoader]
}