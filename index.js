'use strict';

module.exports = options => {
	options = Object.assign({}, options);
	const regex = '(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)';
	return options.exact ? new RegExp(`(?:^${regex}?$)`) : new RegExp(regex, 'g');
};
