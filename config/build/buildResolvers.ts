import { ResolveOptions } from "webpack"
import { BuildOptions } from "./types/types"

export const buildResolvers = ({paths}: BuildOptions): ResolveOptions  => {
  return {
    modules: [paths.src, 'node_modules'],
    alias: {},
    preferAbsolute: true,
    mainFiles: ['index'],
    extensions: ['.tsx', '.ts', '.js']
  }
}