/* eslint-disable no-console */
import chalk from 'chalk';

export const logger = level => message => console.log(level, message);
export const data = message => console.log(message);
export const error = logger(chalk.inverse.bold.red('[ERROR]'));
export const info = logger(chalk.dim.blue('[INFO]'));
export const success = logger(chalk.green('[SUCCESS]'));
export const warning = logger(chalk.inverse.yellow('[WARNING]'));
export const apiError = (err, message, spinner) => {
	if (err) {
		if (spinner) {
			spinner.stop();
		}
		error(message);
		process.exit(1);
	}
};

export default {
	apiError,
	data,
	error,
	info,
	success,
	warning,
};
