import { arr } from '../src/';

const mockArr = [ 'foo', 'bar', 'baz', 'quux' ];

describe('Array utilities', () => {
	describe('toSentence', () => {
		it('should not mutate the array', () => {
			arr.toSentence(mockArr);
			expect(mockArr).toEqual(mockArr);
		});

		it('should return a sentence with only "separators" when no "conjunction" is given', () => {
			expect(arr.toSentence(mockArr)).toEqual('foo, bar, baz, quux');
			expect(arr.toSentence(mockArr, ' and ')).toEqual('foo and bar and baz and quux');
			expect(arr.toSentence(mockArr, ' and ', null)).toEqual('foo and bar and baz and quux');
			expect(arr.toSentence(mockArr, ' and ', undefined)).toEqual('foo and bar and baz and quux');
			expect(arr.toSentence(mockArr, ' and ', '')).toEqual('foo and bar and baz and quux');
		});

		it('should return a sentence with "separators" set to ", " when no "separator" is given', () => {
			expect(arr.toSentence(mockArr)).toEqual('foo, bar, baz, quux');
			expect(arr.toSentence(mockArr, null, null)).toEqual('foo, bar, baz, quux');
			expect(arr.toSentence(mockArr, '', null)).toEqual('foo, bar, baz, quux');
			expect(arr.toSentence(mockArr, undefined, null)).toEqual('foo, bar, baz, quux');
		});

		it('should return a sentence with "separators" and a "conjunction" when given', () => {
			expect(arr.toSentence(mockArr, ', ', 'or ')).toEqual('foo, bar, baz or quux');
			expect(arr.toSentence(mockArr, ', ', 'and ')).toEqual('foo, bar, baz and quux');
		});
	});
});
