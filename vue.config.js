


const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

//1.多个代理
module.exports = {
  
	// publicPath:process.env.NODE_ENV==='production'?'./':'/',
  devServer: {
    proxy: {

      //第二个代理
      '/api': {
          target: 'http://23.251.63.23:9999',//后端地址
          //ws: true,
          changeOrigin: true,//是否跨域
          pathRewrite:{
            '^/api':'/api'//使用此代理的话需在路径前加/api，例如(/api/login)
          }
      }
    }
  },
  //配置@路径
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("base", resolve("baseConfig"))
      .set("public", resolve("public"));
  }
}
