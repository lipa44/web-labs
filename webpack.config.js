const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'lab5', 'scripts', 'onPageLoad.js'),
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: "[name].bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html")
        })
    ]
}
