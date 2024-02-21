import { useState, useEffect } from "react";
import { getBrowserLang } from "@/utils/util";
import { HashRouter } from "react-router-dom";
import AuthRouter from "@/routers/utils/authRouter";
import Router from "@/routers/index";
import { ConfigProvider, theme, App as Apps } from "antd";
import { useSelector, useDispatch } from "react-redux";
import "./index.less";
import useTheme from "@/hooks/useTheme";
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";
import i18n from "i18next";
import "dayjs/locale/zh-cn";

function App() {
	const dispatch = useDispatch();
	const { language, themeConfig, assemblySize } = useSelector(state => state.global);
	const [i18nLocale, setI18nLocale] = useState(zhCN);

	// 全局使用主题
	useTheme(themeConfig);

	// 设置 antd 语言国际化
	const setAntdLanguage = () => {
		// 如果 redux 中有默认语言就设置成 redux 的默认语言，没有默认语言就设置成浏览器默认语言
		if (language && language == "zh") return setI18nLocale(zhCN);
		if (language && language == "en") return setI18nLocale(enUS);
		if (getBrowserLang() == "zh") return setI18nLocale(zhCN);
		if (getBrowserLang() == "en") return setI18nLocale(enUS);
	};

	useEffect(() => {
		// 全局使用国际化
		i18n.changeLanguage(language || getBrowserLang());
		dispatch({
			type: "global/setLanguage",
			payload: language || getBrowserLang()
		});
		setAntdLanguage();
	}, [language]);

	return (
		<HashRouter>
			<ConfigProvider
				locale={i18nLocale}
				componentSize={assemblySize}
				theme={{
					algorithm: themeConfig.isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
				}}
			>
				{/* App 组件通过 Context 提供上下文方法调用 */}
				<Apps className={`app-main ${themeConfig.prefixCls}`}>
					<AuthRouter>
						<Router />
					</AuthRouter>
				</Apps>
			</ConfigProvider>
		</HashRouter>
	);
}

export default App;
