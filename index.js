'use strict';

module.exports = opts => {
	opts = Object.assign({}, opts);
	const regex = '(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})';
	return opts.exact ? new RegExp(`(?:^${regex}?$)`) : new RegExp(regex, 'g');
};
