'use strict';

var test = require('ava');
var base64Regex = require('./');

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
