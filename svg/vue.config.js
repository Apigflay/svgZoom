const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  productionSourceMap: false,
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('modules', resolve('src/modules'))
      .set('components', resolve('src/components'))
      .set('helper', resolve('src/helper'))
      .set('pages', resolve('src/pages'))
      .set('static', resolve('src/static'))
      .set('assets', resolve('src/assets'))

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {// 为生产环境修改配置...
      config.mode = 'production';
      config["performance"] = {//打包文件大小配置
        "maxEntrypointSize": 10000000,
        "maxAssetSize": 30000000
      }
    }
  },
  devServer: {
    // 运行端口 
    port: 8080,
    // 转发
    proxy: {
        '/api': {
            target: 'http://192.168.0.2:18880',//
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        },
    },
    disableHostCheck: true
  },
}
