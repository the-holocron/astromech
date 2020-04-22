const { createInterface } = require('readline');
const string = require('./str/');

async function updatedByKey (input, key, value, cb) {
	// create readline interface and output to a new file; can't figure out how to write to same file
	const readInterface = createInterface({
		input,
		crlfDelay: Infinity,
		console: false,
	});

	return new Promise(resolve => {
		let str = '';

		// read line by line and modify a line and rewrite it back
		readInterface.on('line', line => {
			if (!line.includes(key)) {
				str += `${line}\n`;
			} else {
				const [ , currentValue ] = line.split(key);
				str += `${key}${cb(currentValue, value)}\n`;
			}
		});

		readInterface.on('close', () => resolve(string.toFile(str, input.path)));
	});
}

async function toStringUpdatedByKey (input, key, value, updateCb, resolveCb) {
	// create readline interface and output to a new file; can't figure out how to write to same file
	const readInterface = createInterface({
		input,
		crlfDelay: Infinity,
		console: false,
	});

	return new Promise(resolve => {
		let str = '';

		// read line by line and modify a line and rewrite it back
		readInterface.on('line', line => {
			if (!line.includes(key)) {
				str += `${line}\n`;
			} else {
				const [ , currentValue ] = line.split(key);
				str += `${key}${updateCb(currentValue, value)}\n`;
			}
		});

		readInterface.on('close', () => resolve(resolveCb(str)));
	});
}

module.exports = {
	toStringUpdatedByKey,
	updatedByKey,
};
