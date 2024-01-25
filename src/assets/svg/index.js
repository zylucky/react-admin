// 使用 require.context 获取指定文件夹下的所有 SVG 文件
const importAll = r => {
	const svgs = {};
	r.keys().map(key => {
		return (svgs[key] = r(key));
	});
	return Object.keys(svgs);
};
const iconList = importAll(require.context("./", false, /\.svg$/));
// 获取图标icon-(*).svg名称列表, 例如[home, hert, ...]
export const getNameList = () => {
	const regex = /\/icon-(.*?)\.svg/;
	return iconList.map(item => item.match(regex)[1]);
};
