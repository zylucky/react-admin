import { Layout } from "antd";
import CollapseIcon from "./components/CollapseIcon";
import "./index.less";
import style from "./index.less";
console.log(style);

const LayoutHeader = () => {
	const { Header } = Layout;
	return (
		<Header>
			<div className="header-lf">
				<CollapseIcon />
			</div>
			<div className="header-ri"></div>
		</Header>
	);
};

export default LayoutHeader;
