'use strict';

/**
 * Regular expression for matching base64 encoded strings
 *
 * @param {Object} opts
 * @api public
 */

module.exports = function (opts) {
	opts = opts || {};
	var regex = '(?:[A-Za-z0-9+\/]{4}\\n?)*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)';

	return opts.exact ? new RegExp('(?:^' + regex + '$)') :
						new RegExp('(?:^|\\s)' + regex, 'g');
};
