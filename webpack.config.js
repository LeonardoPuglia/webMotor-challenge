const webpack = require('webpack')
//const MiniCssExtractPlugin = require('extract-text-webpack-plugin')


module.exports= {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },

    devServer: {
        port: 8081,
        contentBase: './public'
    },

    resolve:{
        extensions: ['.js','.jsx'],
        alias:{
            modules: __dirname + '/node_modules'
        }
    },

    // plugins:[
    //     new MiniCssExtractPlugin({
    //         filename: 'style.css'
    //     })
    // ],

    module: {
        rules:[{
            test: /\.css$/,
            use:[
                //MiniCssExtractPlugin.loader,
                'style-loader',
                'css-loader'
            ]
        },{
            test: /.js?[x]$/,
            exclude: /node_modules/,
            use:{
                loader:'babel-loader'
            }
           
        }]
    }
}