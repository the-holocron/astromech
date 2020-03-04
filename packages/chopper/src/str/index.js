import {
	writeFile,
	writeFileSync,
} from 'fs';
import chalk from 'chalk';
import { diffChars } from 'diff';

export const decode = (str, encoding = 'base64') => Buffer.from(str, encoding).toString();
export const encode = (str, encoding = 'base64') => Buffer.from(str).toString(encoding);

export const getDiff = (target, input) => diffChars(target, input)
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

export const toFile = (content, filename) =>
	writeFile(filename, content, err => {
		if (err) {
			return err;
		}

		return filename;
	});

export const toFileSync = (content, filename) => {
	try {
		writeFileSync(filename, content);
	} catch (e) {
		return false;
	}

	return filename;
};

export const toJSONFile = (content, filename) => toFileSync(JSON.stringify(content, null, 2), filename);

export default {
	decode,
	encode,
	getDiff,
	toFile,
	toFileSync,
	toJSONFile,
};
