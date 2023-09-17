/*
 * @Author: zhangyuan
 * @blog: https://zylucky.github.io
 */
const files = require.context("./models", false, /\.js$/);

const models = {};
files.keys().forEach(key => {
	const fileName = key.replace(/(\.\/|\.js)/g, "");
	models[fileName] = files(key).default;
});

export default models;
