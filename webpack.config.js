var webpack = require("webpack");      //引入webpack

module.exports = {
    entry: './app.js',      //要打包的文件，只打包入口文件
    output: {
        filename: './dist/bundle.js'   //打包出的文件
    },
    module: {
        loaders: [                                        //加载器
            {
                test: /\.jsx?$/,                          //加载以js或者以jsx后缀名的文件
                exclude: /node_modules/,                  //忽略这个文件夹目录下的文件
                loader: 'babel',                         //  加载器名字，对应的包名字 babel-lorder
                query: {
                    presets: ['es2015', 'stage-1', 'react']         //加载js/jsx文件时顺便把es6转成es5，把jsx转成js。
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192&name=dist/images/[name].[ext]'
            }
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            // $: "jquery"
            React: "react",
            ReactDOM: "react-dom",
        }),
    ]                      //依赖注入，全局注册这两个库是为了不用在写react组件时每次都引用它们，当代码里面用到时，它会自动到加载对应的包
};



