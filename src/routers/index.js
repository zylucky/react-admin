import { Navigate, useRoutes } from "react-router-dom";
import models from "./loader";
import Login from "@/views/login/index";
import { HOME_URL } from "@/config/config";

// * 处理路由
export const routerArray = [];
Object.keys(models).forEach(item => {
	Object.keys(models[item]).forEach(key => {
		routerArray.push(models[item][key]);
	});
});

export const rootRouter = [
	{
		path: "/",
		element: <Navigate to={HOME_URL} />
	},
	{
		path: "/login",
		element: <Login />,
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login"
		}
	},
	...routerArray,
	{
		path: "*",
		element: <Navigate to="/404" />
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
