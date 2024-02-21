import screenfull from "screenfull";
import { App, Popover } from "antd";
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
		<Popover content={content} trigger="hover">
			<i
				className={["icon-style iconfont", fullScreen ? "icon-suoxiao" : "icon-fangda"].join(" ")}
				onClick={handleFullScreen}
			></i>
		</Popover>
	);
};

export default Fullscreen;
