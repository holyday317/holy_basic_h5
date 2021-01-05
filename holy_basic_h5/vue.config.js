const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
let publicPath = '/'
if (process.env.NODE_ENV === 'production') {
  if (process.env.VUE_APP_TARGET_ENV === 'sit') {
    // 测试环境
    publicPath = '/'
  } else {
    // 生产环境
    publicPath = '/'
  }
}
module.exports = {
  publicPath, // 设置资源public path
  outputDir: 'dist', //  生产环境构建文件的目录
  assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  configureWebpack: {
    resolve: {
      alias: {
      '@': resolve('src'),
      'assets': resolve('src/assets'),
      'api': resolve('src/api'),
      'views': resolve('src/views'),
      'components': resolve('src/components')
      }
      }
  },
  chainWebpack: config => {
    // 打包分析
    if (process.env.NODE_ENV === 'production') {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static'
        }
      ])
    }
  }
}
