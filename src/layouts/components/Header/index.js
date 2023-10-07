import { Layout } from "antd";
import CollapseIcon from "./components/CollapseIcon";
import AvatarIcon from "./components/AvatarIcon";
import "./index.less";

const LayoutHeader = () => {
	const { Header } = Layout;
	return (
		<Header>
			<div className="header-lf">
				<CollapseIcon />
			</div>
			<div className="header-ri">
				<span className="username">Hooks</span>
				<AvatarIcon />
			</div>
		</Header>
	);
};

export default LayoutHeader;
