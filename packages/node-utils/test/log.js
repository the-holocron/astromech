/* eslint-disable no-console, no-empty-function */
import { log } from '../src/';

describe('Log utilities', () => {
	let consoleOutput;
	const originalLog = console.log;
	const mockedLog = output => consoleOutput.push(output);

	afterEach(() => {
		console.log = originalLog;
	});

	beforeEach(() => {
		console.log = mockedLog;
		consoleOutput = [];
	});

	it('should return data when given data as the message', () => {
		log.data({ foo: 'bar' });
		expect(consoleOutput[0]).toEqual({ foo: 'bar' });
	});

	it('should return an "[ERROR]" when given an string', () => {
		log.error('foo');
		expect(consoleOutput[0]).toEqual(expect.stringContaining('[ERROR]'));
	});

	it('should return an "[INFO]" when given an string', () => {
		log.info('foo');
		expect(consoleOutput[0]).toEqual(expect.stringContaining('[INFO]'));
	});

	it('should return an "[SUCCESS]" when given an string', () => {
		log.success('foo');
		expect(consoleOutput[0]).toEqual(expect.stringContaining('[SUCCESS]'));
	});

	it('should return an "[WARNING]" when given an string', () => {
		log.warning('foo');
		expect(consoleOutput[0]).toEqual(expect.stringContaining('[WARNING]'));
	});

	it('should return a message when an api error is given', () => {
		process.exit = () => {};
		log.apiError(true, 'foo');
		expect(consoleOutput[0]).toEqual(expect.stringContaining('[ERROR]'));
	});

	it('should return a message when an api error and spinner is given', () => {
		process.exit = () => {};
		const spinner = {
			stop: () => {},
		};
		log.apiError(true, 'foo', spinner);
		expect(consoleOutput[0]).toEqual(expect.stringContaining('[ERROR]'));
	});

	it('should return nothing when no error is given', () => {
		process.exit = () => {};
		log.apiError(false);
		expect(consoleOutput[0]).toBeUndefined();
	});
});
