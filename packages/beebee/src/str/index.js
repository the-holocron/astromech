// https://en.wikipedia.org/wiki/Universally_unique_identifier
// credit: https://gist.github.com/jed/982883
export const createUUID = num => num ? (num ^ Math.random() * 16 >> num / 4).toString(16) : ([ 1e7 ] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, createUUID);

// eslint-disable-next-line no-useless-escape
export const isInvalidEmail = str => !(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(str)));

// credit: https://stackoverflow.com/a/20392392
export function isJSON (str) {
	try {
		const obj = JSON.parse(str);

		// Handle non-exception-throwing cases:
		// Neither JSON.parse(false) nor JSON.parse(1234) throw errors, hence the type-checking,
		// JSON.parse(null) returns null, and typeof null === "object" so check for that, too; null is falsey, so this suffices:
		if (obj && typeof obj === 'object') {
			return obj;
		}
	} catch (e) { } // eslint-disable-line no-empty

	return false;
}

export function isValidUUID (uuid) {
	if (typeof uuid === 'string') {
		// credit: https://stackoverflow.com/a/13653180
		return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(uuid);
	}

	return false;
}

export const stringToArray = str => (Array.isArray(str)) ? str : [ str ];

// credit: https://www.30secondsofcode.org/js/s/to-kebab-case/
export const stringToKebabCase = str => str &&
	str
		.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
		.map(str => str.toLowerCase())
		.join('-');

export default {
	createUUID,
	isInvalidEmail,
	isJSON,
	isValidUUID,
	toArray: stringToArray,
	toKebabCase: stringToKebabCase,
};
