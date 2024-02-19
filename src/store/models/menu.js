/*
 * @Author: zhangyuan
 * @blog: https://zylucky.github.io
 */
import { getMenuList } from "@/api/modules/login";

const menu = {
	state: {
		isCollapse: false,
		menuList: []
	},
	reducers: {
		setStates(state, payload) {
			return { ...state, ...payload };
		},
		// * setMenuListAction
		setMenuListAction(state, payload) {
			return { ...state, menuList: payload };
		},
		// * updateCollapse
		updateCollapse(state, payload) {
			return { ...state, isCollapse: payload };
		}
	},
	effects: () => ({
		// 异步（示例）
		async getMenuListAction() {
			const { data = [] } = await getMenuList();
			this.setMenuListAction({ menuList: data });
		}
	})
};

export default menu;
