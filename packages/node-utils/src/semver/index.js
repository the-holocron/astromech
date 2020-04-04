import { coerce, inc, valid } from 'semver';

const RELEASE_TYPES = [
	'major',
	'minor',
	'patch',
	'premajor',
	'preminor',
	'prepatch',
	'prerelease',
];

export const isVersion = version => Boolean(valid(coerce(version)));
export const isReleaseType = type => RELEASE_TYPES.includes(type);
export const isValid = type => isReleaseType(type) || isVersion(type);

export const increment = (version, type) => {
	if (isReleaseType(type)) {
		return inc(version, type);
	}

	if (isVersion(type)) {
		return type;
	}

	return version;
};

export default {
	increment,
	isReleaseType,
	isValid,
	isVersion,
};
