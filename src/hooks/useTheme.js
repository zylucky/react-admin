import "@/styles/theme/theme-default.less";
import "@/styles/theme/theme-dark.less";

/**
 * @description 全局主题设置
 * */
const useTheme = themeConfig => {
	const { weakOrGray, isDark } = themeConfig;

	const initTheme = () => {
		// 灰色和弱色切换
		const body = document.documentElement;
		if (!weakOrGray) body.setAttribute("style", "");
		if (weakOrGray === "weak") body.setAttribute("style", "filter: invert(80%)");
		if (weakOrGray === "gray") body.setAttribute("style", "filter: grayscale(1)");

		// 切换暗黑模式
		let head = document.getElementsByTagName("head")[0];
		const getStyle = head.getElementsByTagName("style");
		if (getStyle.length > 0) {
			for (let i = 0, l = getStyle.length; i < l; i++) {
				if (getStyle[i]?.getAttribute("data-type") === "dark") getStyle[i].remove();
			}
		}
		let styleDom = document.createElement("style");
		styleDom.dataset.type = "dark";
		const darkThemeStyle =
			"body{background-color: #141414;color: rgba(255, 255, 255, .85);}#driver-highlighted-element-stage{background-color: #525457 !important;}";
		const defaultThemeStyle =
			"body{background-color: #ffffff;color: rgba(0, 0, 0, .85);}#driver-highlighted-element-stage{background-color: #ffffff !important}";
		styleDom.innerHTML = isDark ? darkThemeStyle : defaultThemeStyle;
		head.appendChild(styleDom);
	};
	initTheme();

	return {
		initTheme
	};
};

export default useTheme;
