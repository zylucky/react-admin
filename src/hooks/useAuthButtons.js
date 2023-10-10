import { searchRoute } from "@/utils/util";
import { useLocation } from "react-router-dom";
import { routerArray } from "@/routers";
import { useSelector } from "react-redux";

/**
 * @description 页面按钮权限 hooks
 * */
const useAuthButtons = () => {
	const { pathname } = useLocation();
	const route = searchRoute(pathname, routerArray);
	const { authButtons } = useSelector(state => state.auth);

	return {
		BUTTONS: authButtons[route?.meta?.key] || {}
	};
};

export default useAuthButtons;
