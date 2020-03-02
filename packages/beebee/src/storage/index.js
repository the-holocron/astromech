const deleteAll = () => window.localStorage.clear();
const deleteItem = key => window.localStorage.removeItem(key);
const getAll = () => Object.keys(window.localStorage).map(key => ({ [key]: window.localStorage.getItem(key) }));
const getItem = key => JSON.parse(window.localStorage.getItem(key));
const setItem = (key, value) => window.localStorage.setItem(key, JSON.stringify(value));

export default {
	deleteAll,
	getAll,
	delete: deleteItem,
	get: getItem,
	set: setItem,
};
