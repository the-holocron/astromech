const {
	existsSync,
	mkdir,
	readFileSync,
} = require('fs');
const { string } = require('iamnewton-js-utils');
const { decode: strDecode } = require('./string');

const decode = file => strDecode(readFileSync(file));

const getPath = file => {
	const parts = file.split('/');
	const stripFileName = parts.slice(0, -1);

	return stripFileName.join('/');
};

const makeDir = fullPath => {
	const path = getPath(fullPath);

	if (path && !existsSync(path)) {
		const dir = mkdir(path, { recursive: true }, err => {
			if (err) {
				return err;
			}

			return path;
		});

		return dir;
	}

	return path;
};

const isJSON = file => {
	const parts = file.split('.');
	return parts[parts.length - 1] === 'json';
};

const toJSON = file => {
	if (!(file && existsSync(file))) {
		return `${file} does not exist!`;
	}

	if (!isJSON(file)) {
		return `'${file}' is not a valid JSON file!`;
	}

	if (!string.isJSON(decode(file))) {
		return `'${file}' does not contain valid JSON!`;
	}

	return JSON.parse(decode(file));
};

module.exports = {
	decode,
	getPath,
	isJSON,
	makeDir,
	toJSON,
};
