const path = require("path");
const CracoLessPlugin = require("craco-less");
const autoprefixer = require("autoprefixer");

module.exports = {
	//配置代理解决跨域
	devServer: {
		open: false,
		port: 3000,
		proxy: {
			"/api": {
				target: "https://www.fastmock.site/mock/8729e12a62b4523b69c26300a6b06005",
				changeOrigin: true,
				pathRewrite: {
					"^/api": "/api"
				}
			}
		}
	},
	style: {
		postcss: {
			plugins: [autoprefixer()]
		}
	},
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						// 这里可以添加自定义的 less-loader 选项
						modifyVars: {
							"@primary-color": "#1890ff"
						},
						javascriptEnabled: true
					}
				}
			}
		}
	],
	webpack: {
		//@符号作为src文件
		alias: {
			"@": path.join(__dirname, "src")
		}
	}
};
