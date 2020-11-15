module.exports = {
    entry: '.\\app.jsx',
    output: {
        path: __dirname,
        filename: 'index.js'
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