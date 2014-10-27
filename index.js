'use strict';

/**
 * Regular expression for matching base64 encoded strings
 *
 * @api public
 */

module.exports = function () {
	return /(^|\s)(?:[A-Za-z0-9+\/]{4}\n?)*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)/gi;
};
