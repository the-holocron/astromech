import { exec } from 'child_process';
import { uri } from '@theholocron/beebee';

const _exec = command =>
	new Promise((resolve, reject) => {
		exec(command, (err, stdout) => {
			if (err) {
				return reject(err);
			}
			return resolve(stdout);
		});
	});

export const getHTTPStatus = (url, token) =>
	_exec(`curl -H 'Authorization: Bearer ${token}' -s -o /dev/null -I -w '%{http_code}' ${url}`)
		.then(stdout => JSON.parse(stdout));

export const isUp = (url, token) =>
	getHTTPStatus(url, token)
		.then(status => !((status >= 400)));

export const getData = (url, token, params) =>
	_exec(`curl -H 'Authorization: Bearer ${token}' ${uri.addParams(url, { ...params })}`)
		.then(stdout => JSON.parse(stdout));

export const patchData = (url, token, payload) =>
	_exec(`curl -X PATCH -H 'Authorization: Bearer ${token}' -H 'Content-Type: application/json' -d '${JSON.stringify(payload)}' ${url}`)
		.then(stdout => JSON.parse(stdout));

export const postData = (url, token, payload) =>
	_exec(`curl -X POST -H 'Authorization: Bearer ${token}' -H 'Content-Type: application/json' -d '${JSON.stringify(payload)}' ${url}`)
		.then(stdout => JSON.parse(stdout));

export default {
	get: getData,
	getHTTPStatus,
	isUp,
	patch: patchData,
	post: postData,
};
