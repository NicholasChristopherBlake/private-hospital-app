import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = (): DevServerConfiguration => {
  return {
    static: './build'
  }
}