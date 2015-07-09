module.exports = {
    entry   : [
        "./src/Functieanalyse/Main.jsx",
    ],
    output: {
        filename: "bundle.js",
        path : 'web/assets/',
        publicPath : '/assets/'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony' },
        ]
    },
    resolve: {extensions: ['', '.js', '.jsx']}
}