import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    
    const babelLoader = buildBabelLoader(options)
    const cssLoader = buildCssLoader(isDev)

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{ loader: 'file-loader' }]
    }

    return [svgLoader, fileLoader, babelLoader, typescriptLoader, cssLoader]
}
