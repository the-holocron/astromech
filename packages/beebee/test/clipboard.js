import { clipboard } from '../src/';

describe('Clipboard utilities', () => {
	describe('copy', () => {
		it('should copy to clipboard', () => {
			global.document.addEventListener = jest.fn();
			global.document.execCommand = jest.fn(() => true);
			global.document.removeEventListener = jest.fn();
			const target = 'Some Text';
			const result = clipboard.copy(target);
			expect(result).toBeTruthy();
			expect(global.document.addEventListener).toHaveBeenCalledTimes(1);
			expect(global.document.removeEventListener).toHaveBeenCalledTimes(1);
		});
	});
});
