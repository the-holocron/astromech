import { str } from '../src/';

describe('String utilities', () => {
	describe('decode', () => {
		it('should decode a string when given a base64', () => expect(str.decode('Zm9v')).toBe('foo'));
	});

	describe('encode', () => {
		it('should encode to a base64 string when given a string', () => expect(str.encode('foo')).toBe('Zm9v'));
	});
});
