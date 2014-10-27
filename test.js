'use strict';

var base64Regex = require('./');
var test = require('ava');

test('match base64 encoded string', function (t) {
	t.plan(3);

	var fixtures = [
		'dW5pY29ybg==',
		'Ym9hdA=='
	];

	fixtures.forEach(function (el) {
		t.assert(base64Regex().test(el), el);
	});

	t.assert(base64Regex().exec('asdasd dgggghey dW5pY29ybg== helllo')[0].trim() === 'dW5pY29ybg==');
});
