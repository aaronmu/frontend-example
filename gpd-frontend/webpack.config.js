module.exports = {
    entry   : [
        "./web/js/app.jsx",
        "./web/css/list-group.less"
    ],
    output: {
        filename: "bundle.js",
        path : 'web/assets/',
        publicPath : '/assets/'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.less$/, loader: 'style!css!less' }
        ]
    },
    resolve: {extensions: ['', '.js', '.jsx', '.css', '.less']}
}