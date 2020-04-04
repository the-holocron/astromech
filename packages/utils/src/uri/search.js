export const deleteSearchParam = (search, key) => {
	const searchParams = new URLSearchParams(search);
	searchParams.delete(key);

	return searchParams.toString();
};

export const getSearchParam = (search, key) => new URLSearchParams(search).get(key);

export const setSearchParam = (search, key, value) => {
	// If an empty value is passed, it should be removed
	// from the search string rather than set to ?key=
	if (value === '') {
		return deleteSearchParam(search, key);
	}

	const searchParams = new URLSearchParams(search);
	searchParams.set(key, value);

	return searchParams.toString();
};

export const searchToObject = search => {
	const searchParams = new URLSearchParams(search);

	return [ ...searchParams.entries() ].reduce((acc, [ key, value ]) => ({
		...acc,
		[key]: value,
	}), {});
};

export default {
	delete: deleteSearchParam,
	get: getSearchParam,
	set: setSearchParam,
	toObject: searchToObject,
};
