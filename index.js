'use strict';

module.exports = options => {
	options = Object.assign({}, options);
	return options.exact ?
		/^(?:[A-Za-z\d+/]{4})*(?:[A-Za-z\d+/]{2}==|[A-Za-z\d+/]{3}=)?$/ :
		/\b(?:[A-Za-z\d+/]{4})*(?:[A-Za-z\d+/]{2}==|[A-Za-z\d+/]{3}=|[A-Za-z\d+/]{4}\b)/;
};
