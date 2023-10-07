import screenfull from "screenfull";
import { App, Popover } from "antd";
import { ExpandOutlined, CompressOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const Fullscreen = () => {
	const { message } = App.useApp();
	const [fullScreen, setFullScreen] = useState(screenfull.isFullscreen);

	useEffect(() => {
		screenfull.on("change", () => {
			if (screenfull.isFullscreen) setFullScreen(true);
			else setFullScreen(false);
			return () => screenfull.off("change", () => {});
		});
	}, []);

	const handleFullScreen = () => {
		if (!screenfull.isEnabled) message.warning("当前您的浏览器不支持全屏 ❌");
		screenfull.toggle();
	};

	const content = fullScreen ? "正常" : "全屏";

	return (
		<i className="icon-style" onClick={handleFullScreen}>
			<Popover content={content} trigger="hover">
				{fullScreen ? <CompressOutlined /> : <ExpandOutlined />}
			</Popover>
		</i>
	);
};

export default Fullscreen;
