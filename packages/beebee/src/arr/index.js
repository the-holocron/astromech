export const arrayToSentence = (arr, separator = ', ', conjunction) => {
	const items = [ ...arr ];
	let lastItem = '';

	if (!separator) {
		separator = ', ';
	}

	if (conjunction && conjunction !== undefined) {
		lastItem = ` ${conjunction}${items.pop()}`;
	}

	return `${items.join(separator)}${lastItem}`.trim();
};

export default {
	toSentence: arrayToSentence,
};
