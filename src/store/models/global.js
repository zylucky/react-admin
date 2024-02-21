/*
 * @Author: zhangyuan
 * @blog: https://zylucky.github.io
 */
const global = {
	state: {
		token: "",
		userInfo: "",
		assemblySize: "middle",
		language: "",
		themeConfig: {
			// 控制主题 theme-default（默认） theme-dark（暗黑）
			prefixCls: "theme-default",
			// 默认 primary 主题颜色
			primary: "#1890ff",
			// 深色模式
			isDark: false,
			// 色弱模式(weak) || 灰色模式(gray)
			weakOrGray: "",
			// 面包屑导航
			breadcrumb: true,
			// 标签页
			tabs: true,
			// 页脚
			footer: true
		}
	},
	reducers: {
		setStates(state, payload) {
			return { ...state, ...payload };
		},
		// * setToken
		setToken(state, payload) {
			return { ...state, token: payload };
		},
		// * setAssemblySize
		setAssemblySize(state, payload) {
			return { ...state, assemblySize: payload };
		},
		// * setThemeConfig
		setThemeConfig(state, payload) {
			return { ...state, themeConfig: payload };
		},
		// * setLanguage
		setLanguage(state, payload) {
			return { ...state, language: payload };
		}
	},
	effects: () => ({
		// 异步
	})
};

export default global;
