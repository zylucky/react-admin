import { Dropdown, Menu } from "antd";
import { useSelector, useDispatch } from "react-redux";

const Language = () => {
	const dispatch = useDispatch();
	const { language } = useSelector(state => state.global);

	const setLanguage = e => {
		dispatch({
			type: "global/setLanguage",
			payload: e
		});
	};

	const menu = () => (
		<Menu
			items={[
				{
					key: "1",
					label: <span>简体中文</span>,
					onClick: () => setLanguage("zh"),
					disabled: language === "zh"
				},
				{
					key: "2",
					label: <span>English</span>,
					onClick: () => setLanguage("en"),
					disabled: language === "en"
				}
			]}
		/>
	);
	return (
		<Dropdown dropdownRender={menu} placement="bottom" trigger={["click"]} arrow={true}>
			<i className="icon-style iconfont icon-zhongyingwen"></i>
		</Dropdown>
	);
};

export default Language;
