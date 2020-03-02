const {
	writeFile,
	writeFileSync,
} = require('fs');
const chalk = require('chalk');
const { diffChars } = require('diff');

const decode = (str, encoding = 'base64') => Buffer.from(str, encoding).toString();
const encode = (str, encoding = 'base64') => Buffer.from(str).toString(encoding);

const getDiff = (target, input) => diffChars(target, input)
	.map(({ added, removed, value }) => {
		if (added) {
			return chalk.bold.black.bgGreen(value);
		}

		if (removed) {
			return chalk.white.bgRed(value);
		}

		return value;
	})
	.join('');

const toFile = (content, filename) =>
	writeFile(filename, content, err => {
		if (err) {
			return err;
		}

		return filename;
	});

const toFileSync = (content, filename) => {
	try {
		writeFileSync(filename, content);
	} catch (e) {
		return false;
	}

	return filename;
};

const toJSONFile = (content, filename) => {
	try {
		writeFileSync(filename, JSON.stringify(content, null, 2));
	} catch (e) {
		return false;
	}

	return filename;
};

module.exports = {
	decode,
	encode,
	getDiff,
	toFile,
	toFileSync,
	toJSONFile,
};
