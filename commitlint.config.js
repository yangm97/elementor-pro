module.exports = {
	extends: [ '@commitlint/config-conventional' ],
	rules: {
		'type-case': [ 2, 'always', 'sentence-case' ],
		'type-enum': [ 2, 'always', [ 'New', 'Tweak', 'Fix', 'Experiment', 'Deprecate', 'Deprecated', 'Revert' ] ],
	},
};
