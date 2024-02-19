import { Dropdown, Menu } from "antd";
import { PicRightOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

const AssemblySize = () => {
	const dispatch = useDispatch();
	const { assemblySize } = useSelector(state => state.global);

	// 切换组件大小
	const onClick = e => {
		dispatch({
			type: "global/setAssemblySize",
			payload: e.key
		});
	};

	const menu = () => (
		<Menu
			items={[
				{
					key: "middle",
					disabled: assemblySize == "middle",
					label: <span>默认</span>,
					onClick
				},
				{
					disabled: assemblySize == "large",
					key: "large",
					label: <span>大型</span>,
					onClick
				},
				{
					disabled: assemblySize == "small",
					key: "small",
					label: <span>小型</span>,
					onClick
				}
			]}
		/>
	);
	return (
		<Dropdown dropdownRender={menu} placement="bottom" trigger={["click"]} arrow={true}>
			<PicRightOutlined className="icon-style" />
		</Dropdown>
	);
};

export default AssemblySize;
