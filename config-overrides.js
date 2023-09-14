const { override, addWebpackAlias, addPostcssPlugins, overrideDevServer } = require("customize-cra");
const path = require('path');

// 跨域配置
const devServerConfig = () => config => {
  return {
    ...config,
    // 服务开启gzip
    compress: true,
    proxy: {
      '/api': {
        target: 'https://www.fastmock.site/mock/8729e12a62b4523b69c26300a6b06005',
        changeOrigin: true
        // pathRewrite: {
        //   '^/api': '/api',
        // },
      }
    }
  }
}

module.exports = {
  webpack: override(
    // 设置别名
    addWebpackAlias({
      '@': path.resolve(__dirname, './src'),
    }),
    addPostcssPlugins((plugins) => [
      ...plugins,
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ])
  ),
  devServer: overrideDevServer(
    devServerConfig()
  )
};