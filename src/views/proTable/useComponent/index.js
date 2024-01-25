import IconSvg from "@/components/IconSvg";
import * as Icon from "@/assets/svg/index";
import { useState } from "react";

const UseComponent = () => {
	const [iconList] = useState(Icon.getNameList() || []);

	return (
		<div className="card content-box">
			<div className="svg-list">
				UseComponent &nbsp;
				{iconList.map((item, index) => (
					<IconSvg name={item} key={index} />
				))}
			</div>
		</div>
	);
};

export default UseComponent;
