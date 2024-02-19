/*
 * @Author: zhangyuan
 * @blog: https://zylucky.github.io
 */
const auth = {
	state: {
		authButtons: {},
		authRouter: []
	},
	reducers: {
		setStates(state, payload) {
			return { ...state, ...payload };
		},
		// * setAuthRouter
		setAuthRouter(state, payload) {
			return { ...state, authRouter: payload };
		},
		// * setAuthButtons
		setAuthButtons(state, payload) {
			return { ...state, authButtons: payload };
		}
	},
	effects: () => ({
		// 异步
	})
};

export default auth;
