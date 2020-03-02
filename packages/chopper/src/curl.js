const { exec } = require('child_process');
const { uri } = require('iamnewton-js-utils');

const _exec = command =>
	new Promise((resolve, reject) => {
		exec(command, (err, stdout) => {
			if (err) {
				return reject(err);
			}
			return resolve(stdout);
		});
	});

module.exports = {
	get (url, token, params) {
		return _exec(`curl -H 'Authorization: Bearer ${token}' ${uri.build(url, { ...params })}`)
			.then(stdout => JSON.parse(stdout));
	},

	getHTTPStatus (url, token) {
		return _exec(`curl -H 'Authorization: Bearer ${token}' -s -o /dev/null -I -w '%{http_code}' ${url}`)
			.then(stdout => JSON.parse(stdout));
	},

	exists (url, token) {
		return this.getHTTPStatus(url, token)
			.then(status => !((status >= 400)));
	},

	post (url, token, payload) {
		return _exec(`curl -X POST -H 'Authorization: Bearer ${token}' -H 'Content-Type: application/json' -d '${JSON.stringify(payload)}' ${url}`)
			.then(stdout => JSON.parse(stdout));
	},

	patch (url, token, payload) {
		return _exec(`curl -X PATCH -H 'Authorization: Bearer ${token}' -H 'Content-Type: application/json' -d '${JSON.stringify(payload)}' ${url}`)
			.then(stdout => JSON.parse(stdout));
	},
};
