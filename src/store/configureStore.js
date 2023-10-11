import { init } from "@rematch/core";
import createLoadingPlugin from "@rematch/loading";
import models from "./loader";
import persistPlugin from "@rematch/persist";
import { getAsync, setAsync, removeAsync } from "./persistLocal";

const loadingPlugin = createLoadingPlugin({ type: Number });
// 持久化存储配置
const persistConfig = {
	key: "redux-state", // 存储的 key 名称
	storage: {
		getItem: getAsync, // 使用自定义的异步方法
		setItem: setAsync,
		removeItem: removeAsync
	}, // 使用 localStorage 进行存储
	whitelist: ["auth", "breadcrumb", "global", "menu", "tabs"] // 需要持久化存储的 model
};

const configureStore = () => {
	const store = init({
		plugins: [loadingPlugin, persistPlugin(persistConfig)],
		models
	});
	return store;
};

export default configureStore;
