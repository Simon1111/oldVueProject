// vue.config.js
const path = require('path')

module.exports = {
    configureWebpack: {
        resolve: {
            modules: [
                path.join(__dirname, "node_modules"),
                path.join(__dirname, 'resources', 'assets', 'js', 'sass', 'scss', 'css'),
            ],
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': path.join(__dirname, 'src/')
            }
        },
        devServer: {
            watchOptions: {
              poll: true
            }
        }
    }
}