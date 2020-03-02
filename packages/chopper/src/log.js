/* eslint-disable no-console */
const chalk = require('chalk');

const logger = level => message => console.log(level, message);
const data = message => console.log(message);
const error = logger(chalk.inverse.bold.red('[ERROR]'));
const info = logger(chalk.dim.blue('[INFO]'));
const success = logger(chalk.green('[SUCCESS]'));
const warning = logger(chalk.inverse.yellow('[WARNING]'));

const apiError = (err, message, spinner) => {
	if (err) {
		if (spinner) {
			spinner.stop();
		}
		error(message);
		process.exit(1);
	}
};

module.exports = {
	apiError,
	data,
	error,
	info,
	success,
	warning,
};
