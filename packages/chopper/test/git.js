import { git } from '../src/';

jest.mock('../src/');

describe('Git utilities', () => {
	describe('commitish', () => {
		git.commitish.mockImplementation(() => 123456);
		it('should return the commitish', () => expect(git.commitish()).toBe(123456));
	});
	describe('remote', () => {
		git.remote.mockImplementation(() => 'https://github.com/the-holocron/astromech.git');
		it('should return the remote', async () => expect(git.remote()).toBe('https://github.com/the-holocron/astromech.git'));
	});
});
