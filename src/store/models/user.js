/*
 * @Author: zhangyuan
 * @blog: https://zylucky.github.io
 */
const user = {
	state: {
		userInfo: {
			name: "小手冰凉"
		}
	},
	reducers: {
		setStates(state, payload) {
			return { ...state, ...payload };
		}
	},
	effects: () => ({
		// 异步
		// 请求用户信息&权限
		async fetchPermissions() {
			this.setStates({
				userInfo: {
					name: "执笔写下信念"
				}
			});
		}
	})
};

export default user;
