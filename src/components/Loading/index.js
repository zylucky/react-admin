import { Spin } from "antd";
import "./index.scss";

const Loading = ({ tip = "Loading" }) => {
	return <Spin tip={tip} size="large" className="request-loading"><></></Spin>;
};

export default Loading;
