const { coerce, inc, valid } = require('semver');

const RELEASE_TYPES = [
	'major',
	'minor',
	'patch',
	'premajor',
	'preminor',
	'prepatch',
	'prerelease',
];

const isVersion = version => Boolean(valid(coerce(version)));
const isReleaseType = type => RELEASE_TYPES.includes(type);
const isValid = type => isReleaseType(type) || isVersion(type);

const increment = (version, type) => {
	if (isReleaseType(type)) {
		return inc(version, type);
	}

	if (isVersion(type)) {
		return type;
	}

	return version;
};

module.exports = {
	increment,
	isReleaseType,
	isValid,
	isVersion,
};
