import { useSelector, useDispatch } from "react-redux";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const CollapseIcon = () => {
	const dispatch = useDispatch();
	const { isCollapse } = useSelector(state => state.menu);

	const updateCollapse = () => {
		dispatch({
			type: "menu/updateCollapse",
			payload: {
				isCollapse: !isCollapse
			}
		});
	};

	return (
		<div className="collapsed" onClick={updateCollapse}>
			{isCollapse ? <MenuUnfoldOutlined id="isCollapse" /> : <MenuFoldOutlined id="isCollapse" />}
		</div>
	);
};

export default CollapseIcon;
