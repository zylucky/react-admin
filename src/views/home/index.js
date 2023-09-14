import welcome from "@/assets/images/welcome01.png";
import style from "./index.module.scss";

const Home = () => {
	return (
		<div className={`${style.home} card`}>
			<img src={welcome} alt="welcome" />
		</div>
	);
};

export default Home;
