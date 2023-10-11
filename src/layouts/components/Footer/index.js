import { useSelector } from "react-redux";
import "./index.less";

const LayoutFooter = () => {
	const { themeConfig } = useSelector(state => state.global);

	return (
		<>
			{!themeConfig.footer && (
				<div className="footer">
					<a href="/#/" target="_blank" rel="noreferrer">
						2022 © Hooks-Admin By Hooks Technology.
					</a>
				</div>
			)}
		</>
	);
};

export default LayoutFooter;
