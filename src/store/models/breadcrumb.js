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
      return { ...state, ...payload }
    }
  },
  effects: () => ({
    // 异步
    // * setBreadcrumbList
    async setBreadcrumbList({ breadcrumbList }) {
      this.setStates({ breadcrumbList });
    }
  })
}

export default breadcrumb;