import { Spin } from "antd";
import "./index.less";
import PropTypes from "prop-types";

const Loading = ({ tip = "Loading" }) => {
	return (
		<Spin tip={tip} size="large" className="request-loading">
			<></>
		</Spin>
	);
};

Loading.propTypes = {
	tip: PropTypes.string // 添加 `tip` 属性，并进行类型验证
};

export default Loading;
