module.exports = {
  devServer: {
    proxy: {
      '/v1': {
        target: process.env.VUE_APP_APIROOT,
        pathRewrite: { '^/v1': '' },
        changeOrigin: true,
        ws: true
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/style/variables.scss";'
      }
    }
  }
}
