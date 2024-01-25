# React-Admin

### 介绍

React Admin，基于 React18、React-Router v6、React-Hooks、Rematch、TypeScript、Vite2、Ant-Design 开源的一套后台管理系统。

### 一、在线预览地址 👀

- Link：https://zylucky.gitee.io/react-admin

### 二、Git 仓库地址 (欢迎 Star⭐)

- Gitee：https://gitee.com/zylucky/react-admin.git

### 三、🔨🔨🔨 项目功能

- 🚀 采用最新技术找开发：React18、React-Router v6、React-Hooks
- 🚀 采用 webpack 作为项目开发
- 🚀 使用 rematch 做状态管理
- 🚀 对 Axios 二次封装 （错误拦截、常用请求封装、全局请求 Loading、取消重复请求…）
- 🚀 支持 Antd 组件大小切换、暗黑 && 灰色 && 色弱模式、i18n 国际化（i18n 暂时没配置所有文件）
- 🚀 使用 自定义高阶组件 进行路由权限拦截（403 页面）、页面按钮权限配置
- 🚀 支持 React-Router v6 路由懒加载配置、菜单手风琴模式、无限级菜单、多标签页、面包屑导航
- 🚀 使用 Prettier 统一格式化代码，集成 Eslint、Stylelint 代码校验规范（项目规范配置）
- 🚀 使用 husky、lint-staged、commitlint、commitizen、cz-git 规范提交信息（项目规范配置）

### 四、安装使用步骤 📑

- **Clone：**

```text
# Gitee
git clone https://gitee.com/zylucky/react-admin.git
```

- **Install：**

```text
npm install

# npm install 安装失败，请升级 nodejs 到 16 以上，或尝试使用以下命令：
npm install --registry=https://registry.npm.taobao.org
```

- **Run：**

```text
npm run start
npm run serve
```

- **Build：**

```text
# 开发环境
npm run build:dev

# 预生产环境
npm run build:prod

# 生产环境
npm run build
```

### 五、文件资源目录 📚

```text
React-Admin
├─ .vscode                # vscode推荐配置
├─ public                 # 静态资源文件（忽略打包）
│  ├─ index.html          # 入口 html
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ enums               # 项目枚举
│  ├─ hooks               # 常用 Hooks
│  ├─ layouts             # 框架布局
│  ├─ routers             # 路由管理
│  ├─ store               # 状态管理
│  ├─ styles              # 全局样式
│  ├─ utils               # 工具库
│  ├─ views               # 项目所有页面
│  ├─ App.js              # 入口页面
│  ├─ main.js             # 入口文件
├─ .editorconfig          # 编辑器配置（格式化）
├─ .env                   # 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 预生产环境配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.js           # Eslint 校验配置
├─ .gitignore             # git 提交忽略
├─ .prettierignore        # 忽略 prettier 格式化
├─ .prettierrc.js         # prettier 配置
├─ package-lock.json      # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ README.md              # README 介绍
└─ craco.config.ts        # 配置
```

### 六、项目后台接口 🧩

项目后台接口完全采用 Mock 数据，感谢以下 Mock 平台支持：

- FastMock： https://www.fastmock.site/
- EasyMock：https://mock.mengxuegu.com/