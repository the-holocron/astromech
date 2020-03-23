import { str } from '@theholocron/beebee';
import {
	F_OK,
	access,
	existsSync,
	mkdir,
	readFileSync,
	writeFile,
} from 'fs';
import { join } from 'path';
import { decode as strDecode } from '../str/';

export const createJSON = (data, filename) => new Promise((resolve, reject) => {
	writeFile(filename, JSON.stringify(data, null, 2), 'utf8', err => {
		if (err) {
			return reject(err);
		}
		return resolve(`Created ${filename}`);
	});
});

export const decode = file => strDecode(readFileSync(file));

// returns a promise which resolves true if file exists:
export const exists = file => new Promise((resolve, reject) => {
	access(join(process.cwd(), file), F_OK, error => resolve(!error));
});

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
	createJSON,
	decode,
	exists,
	getPath,
	isFileOfType,
	makeDir,
	toJSON,
};
