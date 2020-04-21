import { str } from '../src/';

describe('String utilities', () => {
	describe('createUUID', () => {
		it('should create a valid UUID', () => expect(str.isValidUUID(str.createUUID())).toBe(true));
	});

	describe('isInvalidEmail', () => {
		it('should return false when a valid email is given', () => expect(str.isInvalidEmail('user@example.com')).toBe(false));
		it('should return true when a invalid email is given', () => expect(str.isInvalidEmail('user@example')).toBe(true));
	});

	describe('isJSON', () => {
		it('should return JSON when valid JSON is given', () => expect(str.isJSON('{"foo":"bar", "baz": "qux"}')).toEqual(expect.objectContaining({ foo: 'bar', baz: 'qux' })));
		it('should return false when false is given', () => expect(str.isJSON(false)).toBe(false));
		it('should return false when a number is given', () => expect(str.isJSON(1234)).toBe(false));
		it('should return false when null is given', () => expect(str.isJSON(null)).toBe(false));
		it('should return false when invalid JSON is given', () => expect(str.isJSON('user@example.com')).toBe(false));
	});

	describe('isValidUUID', () => {
		it('should return true when a valid UUID is given', () => {
			const exampleUUIDs = [
				'650015ee-1b46-11e8-accf-0ed5f89f718b', // v1
				'fdcb2824-d245-46a0-893f-afdbe6af93bd', // v4
			];

			exampleUUIDs.forEach(uuid => expect(str.isValidUUID(uuid)).toBe(true));
		});
		it('should return false when an invalid UUID string is given', () => expect(str.isValidUUID('user@example.com')).toBe(false));
		it('should return false when anything but a string is given', () => expect(str.isValidUUID(10)).toBe(false));
	});

	describe('toArray', () => {
		it('should return an array when a string is given', () => expect(str.toArray('camelCase')).toEqual(expect.arrayContaining([ 'camelCase' ])));
		it('should return an array when an array is given', () => expect(str.toArray([ 'some', 'text' ])).toEqual(expect.arrayContaining([ 'some', 'text' ])));
	});

	describe('toKebabCase', () => {
		it('should return a string in kebab case when a camelCased string is given', () => expect(str.toKebabCase('camelCase')).toEqual('camel-case'));
		it('should return a string in kebab case when a string with spaces is given', () => expect(str.toKebabCase('some text')).toEqual('some-text'));
		it('should return a string in kebab case when a mixed string is given', () => expect(str.toKebabCase('some-mixed_string With spaces_underscores-and-hyphens')).toEqual('some-mixed-string-with-spaces-underscores-and-hyphens'));
		it('should return a string in kebab case when a mixed case string is given', () => expect(str.toKebabCase('AllThe-small Things')).toEqual('all-the-small-things'));
		it('should return a string in kebab case when a string with all variations is given', () => expect(str.toKebabCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML')).toEqual('i-am-listening-to-fm-while-loading-different-url-on-my-browser-and-also-editing-some-xml-and-html'));
	});

	describe('toPascalCase', () => {
		const testString = 'THIS is a TeSt string';
		const testNumbers = 'thIs&is&TEST&10';

		it('should return a string formatted as pascal case when given a string', () => {
			expect(str.toPascalCase(testString)).toBe('ThisIsATestString');
		});

		it('should return a string formatted as pascal case when given a single word', () => {
			expect(str.toPascalCase('word')).toBe('Word');
		});

		it('should return a string formatted as pascal case when given a string and a separator', () => {
			expect(str.toPascalCase(testNumbers)).toBe('ThisIsTest');
		});

		it('should throw an error when given anything but a string', () => {
			// number
			expect(() => str.toPascalCase(10)).toThrow();
			// object
			expect(() => str.toPascalCase({ foo: 'bar' })).toThrow();
			// function
			expect(() => str.toPascalCase(testString => testString)).toThrow();
		});
	});

	describe('toTitleCase', () => {
		const testString = 'THIS-is-a-TeSt-string';
		const testNumbers = 'thIs&is&TEST&10';

		it('should return a string formatted as title case when given a string', () => {
			expect(str.toTitleCase(testString)).toBe('This Is A Test String');
		});

		it('should return a string formatted as title case when given a single word', () => {
			expect(str.toTitleCase('word')).toBe('Word');
		});

		it('should return a string formatted as title case when given a string and a separator', () => {
			expect(str.toTitleCase(testNumbers, '&')).toBe('This Is Test 10');
		});

		it('should return the same string when given a string and non-matching separator', () => {
			expect(str.toTitleCase(testString, '&')).toBe('This-is-a-test-string');
		});

		it('should throw an error when given anything but a string', () => {
			// number
			expect(() => str.toTitleCase(10)).toThrow();
			// object
			expect(() => str.toTitleCase({ foo: 'bar' })).toThrow();
			// function
			expect(() => str.toTitleCase(testString => testString)).toThrow();
		});
	});
});
