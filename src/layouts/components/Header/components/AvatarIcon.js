import { Avatar, Menu, Dropdown, App } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import { useDispatch } from "react-redux";
import avatar from "@/assets/images/avatar.png";

const AvatarIcon = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { message, modal } = App.useApp();

	// 退出登录
	const logout = () => {
		modal.confirm({
			title: "温馨提示 🧡",
			icon: <ExclamationCircleOutlined />,
			content: "是否确认退出登录？",
			okText: "确认",
			cancelText: "取消",
			onOk: () => {
				dispatch({
					type: "global/setToken",
					payload: {
						token: ""
					}
				});
				message.success("退出登录成功！");
				navigate("/login");
			}
		});
	};

	// Dropdown Menu
	const menu = () => (
		<Menu
			items={[
				{
					key: "1",
					label: <span className="dropdown-item">首页</span>,
					onClick: () => navigate(HOME_URL)
				},
				{
					key: "2",
					label: <span className="dropdown-item">个人信息</span>,
					onClick: () => console.log("个人信息")
				},
				{
					key: "3",
					label: <span className="dropdown-item">修改密码</span>,
					onClick: () => console.log("修改密码")
				},
				{
					type: "divider"
				},
				{
					key: "4",
					label: <span className="dropdown-item">退出登录</span>,
					onClick: logout
				}
			]}
		></Menu>
	);
	return (
		<>
			<Dropdown dropdownRender={menu} placement="bottom" arrow trigger={["click"]}>
				<Avatar size="large" src={avatar} />
			</Dropdown>
		</>
	);
};

export default AvatarIcon;
