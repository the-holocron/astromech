import { func } from '../src/';

describe('Function utilities', () => {
	describe('noOp', () => {
		it('should return undefined', () => expect(func.noOp()).toBeUndefined());
	});
});
