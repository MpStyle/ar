var webpack = require('webpack');

module.exports = {
    default: {
        cache: true,
        entry: {
            ar: "./src/ts/ar.ts"
        },
        output: {
            filename: '[name].js',
            path: __dirname + "/../dist/js",
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        resolve: {
            extensions: [".ts"]
        },
        devtool: 'source-map',
        plugins: [
            new webpack.optimize.AggressiveMergingPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: { warnings: false },
                comments: false,
                minimize: false,
                sourceMap: true,
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
        ],
        module: {
            rules: [{
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            }]
        }
    },
    test: {
        cache: true,
        entry: {
            ar: './test/ts/ar.Test.ts',
            ar_css: './test/ts/ar_css.Test.ts'
        },
        output: {
            filename: '[name].js',
            path: __dirname + "/../test/out"
        },
        externals: {
            'cheerio': 'window'
        },
        resolve: {
            extensions: [".ts"]
        },
        devtool: 'inline-source-map',
        module: {
            rules: [{
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            }]
        }
    }
};