/*
 * @Author: zhangyuan
 * @blog: https://zylucky.github.io
 */
import { HOME_URL } from "@/config/config";

const global = {
  state: {
    tabsActive: HOME_URL,
    tabsList: [{ title: "首页", path: HOME_URL }]
  },
  reducers: {
    setStates(state, payload) {
      return { ...state, ...payload }
    }
  },
  effects: () => ({
    // 异步
    // * setTabsList
    async setTabsList({ tabsList }) {
      this.setStates({ tabsList });
    },
    // * setTabsActive
    async setTabsActive({ tabsActive }) {
      this.setStates({ tabsActive });
    },
  })
}

export default global;