/*
 * @Author: zhangyuan
 * @blog: https://zylucky.github.io
 */
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import LayoutMenu from "@/layouts/components/Menu";
import LayoutHeader from "./components/Header";
import LayoutFooter from "./components/Footer";
import { useSelector } from "react-redux";
import "./index.less";

const LayoutIndex = () => {
	const { Sider, Content } = Layout;
	const { isCollapse } = useSelector(state => state.menu);

	return (
		// 这里不用 Layout 组件原因是切换页面时样式会先错乱然后在正常显示，造成页面闪屏效果
		<Layout className="container">
			<Sider trigger={null} collapsed={isCollapse} width={220} theme="dark">
				<LayoutMenu></LayoutMenu>
			</Sider>
			<Layout>
				<LayoutHeader></LayoutHeader>
				<Content>
					<Outlet />
				</Content>
				<LayoutFooter></LayoutFooter>
			</Layout>
		</Layout>
	);
};

export default LayoutIndex;
