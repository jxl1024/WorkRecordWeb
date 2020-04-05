module.exports = {
  css: {
    loaderOptions: {
      less: {
          javascriptEnabled: true
      }
    }
  },
  devServer: {
    open:true,
    host:'localhost',
    port: 8080,
    https:false,
    proxy: {
      '/api': {
        target: 'http://106.14.127.241:6010/', //跨域接口
        changOrigin: true,  //允许跨域
        pathRewrite: {
          '^/api': ' '   //请求使用这个api
        }
      }
    }
  }
 
}
