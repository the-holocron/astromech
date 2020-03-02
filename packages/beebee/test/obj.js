import { obj } from '../src/';

const mockObj = { foo: 'bar', baz: 'qux' };

describe('Object utilities', () => {
	describe('isMissingKeys', () => {
		it('should return missing keys from an object', () => expect(obj.isMissingKeys(mockObj, [ 'foo', 'bar', 'baz' ])).toEqual(expect.arrayContaining([ 'bar' ])));
		it('should return false when all keys are found', () => expect(obj.isMissingKeys(mockObj, [ 'foo', 'baz' ])).toBeFalsy());
	});

	describe('toKebabCase', () => {
		it('should convert object to kebab case string', () =>
			expect(obj.toKebabCase({
				string: 'label',
				numb: 5,
				decimal: -4.3,
				obj: { item: 'value' },
				arr: [ 1, 2 ],
				bool: true,
				symb: Symbol('test'),
				undef: undefined,
				nul: null,
				nan: NaN,
				inf: Infinity,
				func: function namedFunc () {}, // eslint-disable-line no-empty-function
			})).toBe('string:label numb:5 decimal:4-3 obj:object-object arr:1-2 bool:true symb:symbol-test undef:undefined nul:null nan:na-n inf:infinity func:function-named-func'),
		);
	});

	describe('updateByKey', () => {
		it('should throw an error when key is not found', () => expect(() => obj.updateByKey(mockObj, 'bar', 'quux')).toThrow('No bar found!'));
		it('should return the value at the key when given', () => expect(obj.updateByKey(mockObj, 'foo', 'quux').foo).toEqual('quux'));

		it('should return the value altered at the key when a callback is given', () => {
			const mockFn = (c, v) => `${c}:${v}`;
			expect(obj.updateByKey(mockObj, 'foo', 'quux', mockFn).foo).toEqual('bar:quux');
		});
	});
});
