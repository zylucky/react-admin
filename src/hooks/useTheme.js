import "@/styles/theme/theme-default.less";
import "@/styles/theme/theme-dark.less";

/**
 * @description 全局主题设置
 * */
const useTheme = themeConfig => {
	const { weakOrGray } = themeConfig;

	const initTheme = () => {
		// 灰色和弱色切换
		const body = document.documentElement;
		if (!weakOrGray) body.setAttribute("style", "");
		if (weakOrGray === "weak") body.setAttribute("style", "filter: invert(80%)");
		if (weakOrGray === "gray") body.setAttribute("style", "filter: grayscale(1)");

		// 切换暗黑模式
	};
	initTheme();

	return {
		initTheme
	};
};

export default useTheme;
