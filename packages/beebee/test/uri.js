import { uri } from '../src/';
import {
	getEscapedKeyValuePair,
	isPresent,
	getQueryParams,
} from '../src/uri/';

const mockKey = 'mockKey';
const mockValue = 'mockValue';
const mockSearchParam1 = 'foo=bar';
const mockSearchParam2 = `foo=bar&${mockKey}=${mockValue}`;
const mockObject = {
	foo: 'foo',
	bar: 'bar',
};
const mockObjectToSearchParam = 'foo=foo&bar=bar';
const mockObjectUnencoded = {
	foo: '%',
	bar: '&',
};
const mockObjectUnencodedToSearchParam = 'foo=%25&bar=%26';

describe('URI utilities', () => {
	describe('getEscapedKeyValuePair', () => {
		const mockKey = 'some';
		const mockValue = '"thing"';
		const expectedEscapedValue = 'some=%22thing%22';

		it('should return an encoded string that escapes quotation when a key/value pair is given', () => expect(getEscapedKeyValuePair(mockKey, mockValue)).toBe(expectedEscapedValue));
	});

	describe('isPresent', () => {
		it('should return true when a value is given', () => expect(isPresent('some value')).toEqual(true));
		it('should return false', () => [ null, undefined, '' ].forEach(mockValue => expect(isPresent(mockValue)).toEqual(false)));
	});

	describe('addParams', () => {
		const mockBase = '/account/v1';
		const mockQueryParams = {
			foo: 'foo',
			bar: '%b`a$r',
		};

		it('should return an encoded URL when special characters are given', () => {
			const expectedUrl = `${mockBase}?foo=foo&bar=${encodeURIComponent(mockQueryParams.bar)}`;
			expect(uri.addParams(mockBase, mockQueryParams)).toBe(expectedUrl);
		});

		it('should return the base URI when no params is given', () => {
			expect(uri.addParams(mockBase)).toBe(mockBase);
		});
	});

	describe('getQueryParams', () => {
		it('should return empty string when an empty object is given', () => expect(getQueryParams({})).toBe(''));
		it('should return empty string when all empty params are given', () => expect(getQueryParams({ obj: [] })).toBe(''));
		it('should return a query param when an empty param and param as an array is given', () => expect(getQueryParams({ param1: [], param2: [ 11 ] })).toBe('param2=11'));
		it('should return a query param when an empty param and param with multiple values is given', () => expect(getQueryParams({ param1: [], param2: [ 11, 22 ] })).toBe('param2=11&param2=22'));
		it('should return a query param when 3 mixed params are given', () => expect(getQueryParams({ param1: [], param2: [ 11, 22 ], param3: 'desc' })).toBe('param2=11&param2=22&param3=desc'));
		it('should return a query param when 4 mixed params are given', () => {
			const mockParams = {
				param1: [ 'mockItem1', 'mockItem2' ],
				param2: [ 12 ],
				param3: 'mockSearchTerm',
				param4: [],
				param5: 'mockStringParam',
			};
			expect(getQueryParams(mockParams)).toEqual('param1=mockItem1&param1=mockItem2&param2=12&param3=mockSearchTerm&param5=mockStringParam');
		});
	});

	describe('cleansePath', () => {
		it('should return the same path when a valid URI is given', () => [ '/test-page', '/test-page?search=query' ].forEach(path => expect(uri.cleansePath(path)).toBe(path)));

		it('should drop trailing forward-slashes when a valid URI is given', () => {
			expect(uri.cleansePath('/test-page/')).toBe('/test-page');
			expect(uri.cleansePath('/test-page/?search=query')).toBe('/test-page?search=query');
			expect(uri.cleansePath('/test-page/?search=query#top')).toBe('/test-page?search=query#top');
			expect(uri.cleansePath('/test-page//')).toBe('/test-page');
		});
	});

	describe('isValidUrl', () => {
		it('should return true when a valid URI is given', () => expect(uri.isValid('http://www.imValid.com')).toEqual(true));
		it('should return false when an invalid URI is given', () => expect(uri.isValid('imNotValid')).toEqual(false));
	});

	describe('parse', () => {
		it('should return each URI segment when a valid URI is given', () => {
			const parsedUrl = uri.parse('http://example.com/path?q=search#asc');
			expect(parsedUrl.protocol).toBe('http:');
			expect(parsedUrl.hostname).toBe('example.com');
			expect(parsedUrl.pathname).toBe('/path');
			expect(parsedUrl.search).toBe('?q=search');
			expect(parsedUrl.hash).toBe('#asc');
		});

		it('should return a search param when a complex search URI is given', () => {
			const parsedUrl = uri.parse('https://www.google.ca/search?q=dperini+regex+url&oq=dperini+regex+url&aqs=chrome..69i57.7852j0j8&sourceid=chrome&ie=UTF-8');
			expect(parsedUrl.search).toBe('?q=dperini+regex+url&oq=dperini+regex+url&aqs=chrome..69i57.7852j0j8&sourceid=chrome&ie=UTF-8');
		});

		it('should return the protocol when any type of URI is given', () => {
			expect(uri.parse('http://example.com').protocol).toBe('http:');
			expect(uri.parse('https://example.com').protocol).toBe('https:');
			expect(uri.parse('ftp://example.com').protocol).toBe('ftp:');
			expect(uri.parse('example.com').protocol).toBe('http:'); // The `testURL` set in the Jest Config uses http
		});

		it('should return each URI segment when a valid relative URI is given ', () => {
			const relativeUrl = uri.parse('/test-page#hash-mark');
			expect(relativeUrl.hostname).toBe('localhost'); // We want this to detect the hostname when it is not set
			expect(relativeUrl.pathname).toBe('/test-page');
			expect(relativeUrl.hash).toBe('#hash-mark');
		});
	});

	describe('search params', () => {
		describe('delete', () => {
			it('should remove a param from the URL search params when a key is given', () => expect(uri.search.delete(mockSearchParam2, mockKey)).toBe(mockSearchParam1));
			it('should return the search param unaltered when a missing key is given', () => expect(uri.search.delete(mockSearchParam1, mockKey)).toBe(mockSearchParam1));
		});

		describe('get', () => {
			it('should return the requested search param', () => expect(uri.search.get(mockSearchParam2, mockKey)).toBe(mockValue));
			it('should return null for missing search params', () => expect(uri.search.get(mockSearchParam2, 'notThere')).toBeNull());
		});

		describe('set', () => {
			const mockUpdatedValue = 'mockUpdatedValue';
			const mockEmptyValue = '';

			it('should remove the key and value when no value is given', () => expect(uri.search.set(mockSearchParam1, mockKey, mockEmptyValue)).toBe(`foo=bar`));
			it('should update the param when a new value is given', () => expect(uri.search.set(mockSearchParam1, mockKey, mockUpdatedValue)).toBe(`foo=bar&${mockKey}=${mockUpdatedValue}`));
			it('should add the param when a new key is given', () => expect(uri.search.set(mockSearchParam2, mockKey, mockUpdatedValue)).toBe(`foo=bar&${mockKey}=${mockUpdatedValue}`));
		});
	});

	describe('toObject', () => {
		it('should return an empty object when no value is given', () => expect(uri.search.toObject('')).toEqual({}));
		it('should return an object when a properly formatted search param is given', () => expect(uri.search.toObject(mockObjectToSearchParam)).toEqual(mockObject));
		it('should return an object with unencoded values when an uncoded search param is given', () => expect(uri.search.toObject(mockObjectUnencodedToSearchParam)).toEqual(mockObjectUnencoded));
	});
});
