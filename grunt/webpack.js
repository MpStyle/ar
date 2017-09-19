var webpack = require('webpack');

module.exports = {
    default: {
        cache: true,
        entry: {
            ar: "./src/ts/ar.ts"
        },
        output: {
            filename: '[name].js',
            path: __dirname + "/../dist/js"
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
            appendScriptTag01: './test/ts/appendScriptTag01.Test.ts',
            appendScriptTag02: './test/ts/appendScriptTag02.Test.ts',
            areLoaded: './test/ts/areLoaded.Test.ts',
            createTicket: './test/ts/createTicket.Test.ts',
            callCallback: './test/ts/callCallback.Test.ts'
        },
        output: {
            filename: '[name].js',
            path: __dirname + "/../test/out"
        },
        externals: {
            'cheerio': 'window'
        },
        resolve: {
            extensions: ['.webpack.js', '.web.js', ".ts", ".js"]
        },
        devtool: 'inline-source-map',
        module: {
            rules: [{
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            "presets": "es2015"
                        }
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            "presets": "es2015"
                        }
                    }
                ]
            }, {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }]
        }
    }
};