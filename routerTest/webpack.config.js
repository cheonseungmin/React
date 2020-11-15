module.exports = {
    entry: '.\\app.jsx',
    output: {
        path: __dirname,
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude:/(node_modules)/,
                use: ['babel-loader']
            }
        ]
    }
}