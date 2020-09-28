module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'static': 'public/static',
        'common': '@/common'
      }
    }
  },
  publicPath:'./'
}
