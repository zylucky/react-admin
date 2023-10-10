import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import { useSelector } from "react-redux";

const BreadcrumbNav = () => {
	const { themeConfig } = useSelector(state => state.global);
	const { breadcrumbList = [] } = useSelector(state => state.breadcrumb);
	const { pathname } = useLocation();
	const breadcrumbData = breadcrumbList[pathname] || [];
	if (!breadcrumbData.includes("首页")) {
		breadcrumbData.unshift("首页");
	}
	const breadcrumbItems = breadcrumbData.map(item => {
		return {
			title: item !== "首页" ? item : <a href={`#${HOME_URL}`}>首页</a>
		};
	});

	return <>{!themeConfig.breadcrumb && <Breadcrumb items={breadcrumbItems}></Breadcrumb>}</>;
};

export default BreadcrumbNav;
