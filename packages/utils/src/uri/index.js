import search from './search';

export const getEscapedKeyValuePair = (key, value) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
export const isPresent = value => (value !== undefined && value !== null && value !== '');
export const getQueryParams = params => Object.keys(params)
	.filter(key => isPresent(params[key]))
	.reduce((paramArray, key) => {
		const value = params[key];
		if (Array.isArray(value)) {
			const escapedValues = value.filter(isPresent).map(element => getEscapedKeyValuePair(key, element));
			paramArray.push(...escapedValues);
		} else {
			paramArray.push(getEscapedKeyValuePair(key, value));
		}
		return paramArray;
	}, []).join('&');

export const uriAddParams = (base, params) => {
	if (params && Boolean(Object.entries(params).length)) {
		return `${base}?${getQueryParams(params)}`;
	}

	return base;
};

/**
* cleansePath
*
* @param {string} path - a URL string that represents the [path](https://www.mattcutts.com/blog/seo-glossary-url-definitions/)
* @return {string} a URL path that removes the last forward slash
*
* @example
*
*   cleansePath('/test-path/')
*   // /test-path
*/
export function uriCleansePath (path) {
	return path
		// Search for the last forward slash in the path and see if it is followed by a ? or #
		// If /? or /# exists in the path drop the forward slash in that group
		// Uses a look-ahead to make sure there are no more forward slashes
		.replace(/\/+(\?|#)(?=[^/]*$)/, '$1')
		// If the last character in the path is a forward-slash, drop it
		.replace(/\/+$/, '');
}

/*
* ^(https?:\/\/)? // protocol
* ((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}| // domain name
* ((\d{1,3}\.){3}\d{1,3})) // ip (v4) address
* (\:\d+)?(\/[-a-z\d%_.~+]*)* // port and path
* (\?[;&a-z\d%_.~+=-]*)? // query string
* (\#[-a-z\d_]*)?$ // fragment locater
*/
const URL_REGEX = /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i; // eslint-disable-line max-len
export const uriIsValid = str => URL_REGEX.test(str);

/**
* parseURL
*
* @param {string} url - a URL string that contains [parts](https://www.mattcutts.com/blog/seo-glossary-url-definitions/)
* @return {object} an object with the protocol, hostname, pathname, search and hash as keys
*
* @example
*
*   parseURL('http://example.com/path?q=search#asc')
*   // {
*   //   protocol: 'http:',
*   //   hostname: 'example.com',
*   //   pathname: '/path',
*   //   search: '?q=search',
*   //   hash: '#asc'
*   // }
*/
export function uriParse (url) {
	const a = document.createElement('a');
	a.href = url;

	const {
		protocol,
		hostname,
		pathname,
		search = '',
		hash = '',
	} = a;

	return {
		protocol,
		hostname,
		pathname,
		search,
		hash,
	};
}

export default {
	addParams: uriAddParams,
	cleansePath: uriCleansePath,
	isValid: uriIsValid,
	parse: uriParse,
	search,
};
