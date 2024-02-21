import lazyLoad from "../utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";

// 外部链接模块
const linkRouter = [
	{
		element: <LayoutIndex />,
		meta: {
			titile: "外部链接"
		},
		children: [
			{
				path: "/link/gitee",
				element: lazyLoad(() => import("@/views/link/gitee/index")),
				meta: {
					requiresAuth: true,
					title: "Gitee 仓库",
					key: "gitee"
				}
			},
			{
				path: "/link/blog",
				element: lazyLoad(() => import("@/views/link/blog/index")),
				meta: {
					requiresAuth: true,
					title: "个人博客",
					key: "blog"
				}
			}
		]
	}
];

export default linkRouter;
