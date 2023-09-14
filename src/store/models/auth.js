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
      return { ...state, ...payload }
    }
  },
  effects: () => ({
    // 异步
    // * setAuthRouter
    async setAuthRouter({ authRouter }) {
      this.setStates({ authRouter });
    },
    // * setAuthButtons
    async setAuthButtons({ authButtons }) {
      this.setStates({ authButtons });
    }
  })
}

export default auth;