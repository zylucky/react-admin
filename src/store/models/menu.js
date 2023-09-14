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
      return { ...state, ...payload }
    }
  },
  effects: () => ({
    // 异步
    // * setMenuListAction
    async setMenuListAction({ menuList }) {
      this.setStates({ menuList });
    },
    async getMenuListAction() {
      const { data = [] } = await getMenuList();
      this.setStates({ menuList: data });
    }
  })
}

export default menu;