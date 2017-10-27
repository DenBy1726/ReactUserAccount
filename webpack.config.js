var path = require('path');

module.exports = {
    entry: "./src/load.js", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, './app'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/app/',
        filename: "bundle.js"       // название создаваемого файла
    },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["env", "react"]    // используемые плагины
                }
            }
        ]
    }
}
