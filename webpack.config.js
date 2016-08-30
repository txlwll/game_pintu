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
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192'
            }
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            // $: "jquery"
            React: "react",
            ReactDOM: "react-dom",
        }),
    ]                       //依赖注入，全局注册这两个库是为了不用在写react组件时每次都引用它们，当代码里面用到时，它会自动到加载对应的包
};



/*
1. npm init --yes 初始化package.json 文件
2. 参照github 的webpack例子 https://github.com/ruanyf/webpack-demos 编写 webpack.config.js文件。
3. 使用npm 来安装依赖的包，比如react、react-dom; webpack,babel-loader,babel-preset-es2015,babel-preset-react,


4. "dev": "webpack --watch --devtool source-map --progress --colors",
 --watch 监听文件修改，自动编译
 --devtool source-map 编译出来的文件方便调试
 --progress  显示编译的进度
 --colors 编译窗口会有颜色

5. 用webpack打包时，每个组件编写好后需要module.export,在需要用到的时候require.

*/