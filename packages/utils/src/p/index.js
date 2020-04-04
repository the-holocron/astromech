export const promiseAsCallee = promise => promise
	.then(result => [ null, result ])
	.catch(err => [ err ]);

export default {
	call: promiseAsCallee,
};
