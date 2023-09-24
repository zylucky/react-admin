import { HashRouter } from "react-router-dom";
import Router from "@/routers/index";
import { ConfigProvider, theme, App as Apps } from "antd";
import { useSelector } from "react-redux";
import "./index.less";
import useTheme from "@/hooks/useTheme";

function App() {
	const { themeConfig } = useSelector(state => state.global);
	console.log(themeConfig);
	// 全局使用主题
	useTheme(themeConfig);

	return (
		<HashRouter>
			<ConfigProvider
				theme={{
					// 1. 单独使用暗色算法
					algorithm: themeConfig.isDark ? theme.darkAlgorithm : theme.defaultAlgorithm

					// 2. 组合使用暗色算法与紧凑算法
					// algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
				}}
			>
				{/* App 组件通过 Context 提供上下文方法调用 */}
				<Apps className={`app-main ${themeConfig.prefixCls}`}>
					<Router />
				</Apps>
			</ConfigProvider>
		</HashRouter>
	);
}

export default App;
