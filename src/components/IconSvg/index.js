import React from "react";
import PropTypes from "prop-types";
import "./style.less";
import "@/assets/svg/index";

const IconSvg = React.memo(({ width, height, name, className }) => {
	return (
		<svg className={className || "icon-svg"} aria-hidden="true" width={width} height={height}>
			<use xlinkHref={`#icon-${name}`} />
		</svg>
	);
});

IconSvg.displayName = "IconSvg";

// 组件中的属性类型
IconSvg.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	name: PropTypes.string,
	className: PropTypes.string
};

export default IconSvg;
