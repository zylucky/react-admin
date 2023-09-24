/*
 * @Author: zhangyuan
 * @blog: https://zylucky.github.io
 */
export const getAsync = key => {
	return new Promise(resolve => {
		const value = localStorage.getItem(key);
		resolve(value);
	});
};

export const setAsync = (key, value) => {
	return new Promise(resolve => {
		localStorage.setItem(key, value);
		resolve();
	});
};

export const removeAsync = key => {
	return new Promise(resolve => {
		localStorage.removeItem(key);
		resolve();
	});
};
