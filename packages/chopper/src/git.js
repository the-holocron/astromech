const git = require('simple-git/promise')();

async function commitish () {
	return git.revparse([ '--short', 'HEAD' ]);
}

async function getRemote () {
	return git.listRemote([ '--get-url' ]);
}

module.exports = {
	commitish,
	getRemote,
};
