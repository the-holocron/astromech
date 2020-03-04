import simpleGit from 'simple-git/promise';

const git = simpleGit();

export async function commitish () {
	return git.revparse([ '--short', 'HEAD' ]);
}

export async function remote () {
	return git.listRemote([ '--get-url' ]);
}

export default {
	commitish,
	remote,
};
