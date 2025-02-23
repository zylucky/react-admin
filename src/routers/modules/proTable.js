import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";

// 超级表格模块
const proTableRouter = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "超级表格"
		},
		children: [
			{
				path: "/proTable/useHooks",
				element: lazyLoad(() => import("@/views/proTable/useHooks/index")),
				meta: {
					requiresAuth: true,
					title: "使用 Hooks",
					key: "useHooks"
				}
			},
			{
				path: "/proTable/useComponent",
				element: lazyLoad(() => import("@/views/proTable/useComponent/index")),
				meta: {
					requiresAuth: true,
					title: "使用 Component",
					key: "useComponent"
				}
			}
		]
	}
];

export default proTableRouter;
