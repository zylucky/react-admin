import { Switch } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { THEME_NAME } from "../../config/config";

const SwitchDark = () => {
	const dispatch = useDispatch();
	const { themeConfig } = useSelector(state => state.global);
	const onChange = checked => {
		dispatch({
			type: "global/setThemeConfig",
			payload: {
				themeConfig: {
					...themeConfig,
					isDark: checked,
					prefixCls: checked ? THEME_NAME.THEME_DARK : THEME_NAME.THEME_DEFAULT
				}
			}
		});
	};

	return (
		<Switch
			className="dark"
			defaultChecked={themeConfig.isDark}
			checkedChildren={<>🌞</>}
			unCheckedChildren={<>🌜</>}
			onChange={onChange}
		/>
	);
};

export default SwitchDark;
