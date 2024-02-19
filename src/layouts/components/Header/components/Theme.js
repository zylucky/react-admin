import { Drawer, Divider, Switch } from "antd";
import { SkinOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FireOutlined, SettingOutlined } from "@ant-design/icons";
import SwitchDark from "@/components/SwitchDark";

const Theme = () => {
	const dispatch = useDispatch();
	const [visible, setVisible] = useState(false);
	const { isCollapse } = useSelector(state => state.menu);
	const { themeConfig } = useSelector(state => state.global);
	const { weakOrGray, breadcrumb, tabs, footer } = themeConfig;

	const setWeakOrGray = (checked, theme) => {
		if (checked)
			return dispatch({
				type: "global/setThemeConfig",
				payload: {
					...themeConfig,
					weakOrGray: theme
				}
			});
		dispatch({
			type: "global/setThemeConfig",
			payload: {
				...themeConfig,
				weakOrGray: ""
			}
		});
	};

	const onChange = (checked, keyName) => {
		return dispatch({
			type: "global/setThemeConfig",
			payload: {
				...themeConfig,
				[keyName]: !checked
			}
		});
	};

	const updateCollapse = e => {
		dispatch({
			type: "menu/updateCollapse",
			payload: e
		});
	};

	return (
		<>
			<i
				className="icon-style"
				onClick={() => {
					setVisible(true);
				}}
			>
				<SkinOutlined />
			</i>
			<Drawer
				title="布局设置"
				closable={false}
				onClose={() => {
					setVisible(false);
				}}
				open={visible}
				width={320}
			>
				{/* 全局主题 */}
				<Divider className="divider">
					<FireOutlined />
					全局主题
				</Divider>
				<div className="theme-item">
					<span>暗黑模式</span>
					<SwitchDark />
				</div>
				<div className="theme-item">
					<span>灰色模式</span>
					<Switch
						checked={weakOrGray === "gray"}
						onChange={e => {
							setWeakOrGray(e, "gray");
						}}
					/>
				</div>
				<div className="theme-item">
					<span>色弱模式</span>
					<Switch
						checked={weakOrGray === "weak"}
						onChange={e => {
							setWeakOrGray(e, "weak");
						}}
					/>
				</div>
				<br />
				{/* 界面设置 */}
				<Divider className="divider">
					<SettingOutlined />
					界面设置
				</Divider>
				<div className="theme-item">
					<span>折叠菜单</span>
					<Switch
						checked={isCollapse}
						onChange={e => {
							updateCollapse(e);
						}}
					/>
				</div>
				<div className="theme-item">
					<span>面包屑导航</span>
					<Switch
						checked={!breadcrumb}
						onChange={e => {
							onChange(e, "breadcrumb");
						}}
					/>
				</div>
				<div className="theme-item">
					<span>标签栏</span>
					<Switch
						checked={!tabs}
						onChange={e => {
							onChange(e, "tabs");
						}}
					/>
				</div>
				<div className="theme-item">
					<span>页脚</span>
					<Switch
						checked={!footer}
						onChange={e => {
							onChange(e, "footer");
						}}
					/>
				</div>
			</Drawer>
		</>
	);
};

export default Theme;
