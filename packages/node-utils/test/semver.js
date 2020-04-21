import { semver } from '../src/';

describe('SemVer utilities', () => {
	describe('isVersion', () => {
		it('should return true when a valid SemVer version as a number is given', () => expect(semver.isVersion('1.0.0')).toBe(true));
		it('should return false when a valid SemVer version as a keyword is given', () => expect(semver.isVersion('major')).toBe(false));
		it('should return false when an invalid SemVer version is given', () => expect(semver.isVersion('foo')).toBe(false));
	});

	describe('isReleaseType', () => {
		it('should return true when a valid release type is given', () => expect(semver.isReleaseType('major')).toBe(true));
		it('should return false when an invalid release type is given', () => expect(semver.isReleaseType('foo')).toBe(false));
	});

	describe('isValid', () => {
		it('should return true when a valid version type is given', () => expect(semver.isValid('major')).toBe(true));
		it('should return true when a valid version is given', () => expect(semver.isValid('1.0.0')).toBe(true));
		it('should return false when an invalid version or type is given', () => expect(semver.isValid('foo')).toBe(false));
	});

	describe('increment', () => {
		it('should return a new version when a valid version and type is given', () => expect(semver.increment('1.0.0', 'major')).toBe('2.0.0'));
		it('should return the same version when a valid version and invalid type is given', () => expect(semver.increment('1.0.0', 'foo')).toBe('1.0.0'));
		it('should return a null when an invalid version and valid type is given', () => expect(semver.increment('foo', 'major')).toBeNull());
		it('should return a specific version when an invalid version and an invalid type is given', () => expect(semver.increment('foo', 'foo')).toBe('foo'));
		it('should return a specific version when an valid version and a valid type as a number is given', () => expect(semver.increment('1.0.0', '2.0.0')).toBe('2.0.0'));
		it('should return a version when only a valid version is given', () => expect(semver.increment('1.0.0')).toBe('1.0.0'));
	});
});
