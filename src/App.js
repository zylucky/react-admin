import { HashRouter } from "react-router-dom";
import Router from "@/routers/index";
import { ConfigProvider, theme, App as Apps } from "antd";
import { useSelector } from "react-redux";
import "./index.less";
import useTheme from "@/hooks/useTheme";

function App() {
	const { themeConfig } = useSelector(state => state.global);
	// 全局使用主题
	useTheme(themeConfig);

	return (
		<HashRouter>
			<ConfigProvider
				theme={{
					algorithm: themeConfig.isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
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
