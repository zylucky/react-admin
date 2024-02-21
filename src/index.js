/*
 * @Author: zhangyuan
 * @blog: https://zylucky.github.io
 */
import ReactDOM from "react-dom/client";
import "@/language/index";
import "@/assets/iconfont/iconfont.less";
// 全局配置初始化 css 文件
import "reset-css";
import "@/styles/common.less";
import { Provider } from "react-redux";
import store from "@/store";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// react严格模式
	// <React.StrictMode>
	<Provider store={store}>
		<App />
	</Provider>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
