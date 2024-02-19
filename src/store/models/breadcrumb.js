/*
 * @Author: zhangyuan
 * @blog: https://zylucky.github.io
 */
const breadcrumb = {
	state: {
		breadcrumbList: {}
	},
	reducers: {
		setStates(state, payload) {
			return { ...state, ...payload };
		},
		// * setBreadcrumbList
		setBreadcrumbList(state, payload) {
			return { ...state, breadcrumbList: payload };
		}
	},
	effects: () => ({
		// 异步
	})
};

export default breadcrumb;
