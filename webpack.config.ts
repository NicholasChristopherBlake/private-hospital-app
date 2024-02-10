import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildOptions, BuildPaths } from "./config/build/types/types";

const config = (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }
  const mode = env.mode || 'development'
  const port = env.port || 3000
  const analyze = env.analyze || false
  const isDev = mode === 'development'

  const options: BuildOptions = {
    isDev,
    port,
    paths,
    analyze
  }

  return buildWebpackConfig(options)
}

export default config;