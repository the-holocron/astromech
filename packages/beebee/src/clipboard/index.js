export function copyToClipboard (str) {
	function listener (e) {
		e.clipboardData && e.clipboardData.setData('text/html', str);
		e.clipboardData && e.clipboardData.setData('text/plain', str);
		e.preventDefault();
	}

	document.addEventListener('copy', listener);
	const status = document.execCommand('copy');
	document.removeEventListener('copy', listener);

	return status;
}

export default {
	copy: copyToClipboard,
};
