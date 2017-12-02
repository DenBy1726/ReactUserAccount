var path = require('path');

module.exports = {
    entry: "./src/load.js", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, './app'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/app/',
        filename: "bundle.js"       // название создаваемого файла
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
}
