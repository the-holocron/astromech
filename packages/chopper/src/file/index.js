import {
	existsSync,
	mkdir,
	readFileSync,
} from 'fs';
import { str } from '@theholocron/beebee';
import { decode as strDecode } from '../str/';

export const decode = file => strDecode(readFileSync(file));

export const getPath = file => {
	const parts = file.split('/');
	const stripFileName = parts.slice(0, -1);

	return stripFileName.join('/');
};

export const isFileOfType = (file, suffix = 'json') => {
	const parts = file.split('.');
	return parts[parts.length - 1] === suffix;
};

export const makeDir = fullPath => {
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

export const toJSON = file => {
	if (!(file && existsSync(file))) {
		return `${file} does not exist!`;
	}

	if (!isFileOfType(file)) {
		return `'${file}' is not a valid JSON file!`;
	}

	if (!str.isJSON(decode(file))) {
		return `'${file}' does not contain valid JSON!`;
	}

	return JSON.parse(decode(file));
};

export default {
	decode,
	getPath,
	isFileOfType,
	makeDir,
	toJSON,
};
