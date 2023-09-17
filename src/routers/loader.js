/*
 * @Author: zhangyuan
 * @blog: https://zylucky.github.io
 */
const files = require.context("./modules", false, /\.js$/);

const modules = {};
files.keys().forEach(key => {
	const fileName = key.replace(/(\.\/|\.js)/g, "");
	modules[fileName] = files(key).default;
});

export default modules;
