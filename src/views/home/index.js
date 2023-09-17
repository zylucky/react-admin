import welcome from "@/assets/images/welcome01.png";
import style from "./index.module.less";
import { Button, message } from "antd";

const Home = () => {
	const handleClick = () => {
		message.success("message");
	};

	return (
		<div className={`${style.home} card`}>
			<img src={welcome} alt="welcome" />
			<Button onClick={handleClick}>message</Button>
		</div>
	);
};

export default Home;
