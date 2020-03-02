import str from '../str/';

export const objectIsMissingKeys = (obj, keys) => {
	const missing = keys.filter(key => !obj.hasOwnProperty(key));

	if (missing.length) {
		return missing;
	}

	return false;
};

export const objectToKebabCase = (obj, separator = ':') => Object
	.entries(obj)
	.reduce((acc, [ key, value ]) => `${acc} ${key.toLowerCase()}${separator}${str.toKebabCase(String(value))}`, '')
	.trim();

export const objectUpdateByKey = (obj, key, value, cb) => {
	const currentValue = obj[key];
	const rest = {
		...obj,
	};

	if (!currentValue) {
		throw Error(`No ${key} found!`);
	}

	if (!cb) {
		rest[key] = value;
	} else {
		rest[key] = cb(currentValue, value);
	}

	return rest;
};

export default {
	isMissingKeys: objectIsMissingKeys,
	toKebabCase: objectToKebabCase,
	updateByKey: objectUpdateByKey,
};
