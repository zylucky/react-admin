/*
 * @Author: zhangyuan
 * @blog: https://zylucky.github.io
 */
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { getAuthorButtons } from "@/api/modules/login";
import LayoutMenu from "@/layouts/components/Menu";
import LayoutHeader from "./components/Header";
import LayoutTabs from "./components/Tabs";
import LayoutFooter from "./components/Footer";
import { useSelector, useDispatch } from "react-redux";
import "./index.less";

const LayoutIndex = () => {
	const dispatch = useDispatch();
	const { Sider, Content } = Layout;
	const { isCollapse } = useSelector(state => state.menu);

	// 获取按钮权限列表
	const getAuthButtonsList = async () => {
		const { data } = await getAuthorButtons();
		// 设置按钮权限
		dispatch({
			type: "auth/setAuthButtons",
			payload: data
		});
	};

	const updateCollapse = e => {
		dispatch({
			type: "menu/updateCollapse",
			payload: e
		});
	};

	// 监听窗口大小变化
	const listeningWindow = () => {
		window.onresize = () => {
			return (() => {
				let screenWidth = document.body.clientWidth;
				if (!isCollapse && screenWidth < 1200) updateCollapse(true);
				if (!isCollapse && screenWidth > 1200) updateCollapse(false);
			})();
		};
	};

	useEffect(() => {
		listeningWindow();
		getAuthButtonsList();
	}, []);

	return (
		// 这里不用 Layout(section) 组件原因是切换页面时样式会先错乱然后在正常显示，造成页面闪屏效果
		<section className="container">
			<Sider trigger={null} collapsed={isCollapse} width={220} theme="dark">
				<LayoutMenu></LayoutMenu>
			</Sider>
			<Layout>
				<LayoutHeader></LayoutHeader>
				<LayoutTabs></LayoutTabs>
				<Content>
					<Outlet />
				</Content>
				<LayoutFooter></LayoutFooter>
			</Layout>
		</section>
	);
};

export default LayoutIndex;
