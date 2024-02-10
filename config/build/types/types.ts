export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  analyze: boolean;
}

export interface BuildOptions {
  isDev: boolean;
  port: number;
  paths: BuildPaths;
  analyze: boolean;
}
