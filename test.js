const test = require('ava');
const fixtures = require('./fixtures');
const m = require('.');

test('match base64 encoded string', t => {
	const fixtures = [
		'dgggghey',
		'dW5pY29ybg==',
		'Ym9hdA=='
	];

	for (const x of fixtures) {
		t.true(m({exact: true}).test(x));
	}

	t.is(m().exec('asdasd dgggghey dW5pY29ybg== helllo')[0], 'dgggghey');
	t.is(m().exec('asdasd dgggghe dW5pY29ybg== helllo')[0], 'dW5pY29ybg==');
});

test('match inline sourcemaps', t => {
	for (const x of fixtures) {
		t.true(m({exact: true}).test(x.split('data:application/json;base64,').pop().trim()));
	}
});

test('accepts empty string', t => {
	t.true(m({exact: true}).test(''));
});

test('accepts all small strings', t => {
	t.true(m({}).test('aa=='));
	t.true(m({}).test('aaa='));
	t.true(m({}).test('aaaa'));

	t.true(m({}).test('base64: aa== hello'));
	t.true(m({}).test('base64: aaa= hello'));
	t.true(m({}).test('base64: aaaa hello'));

	t.true(m({exact: true}).test('aa=='));
	t.true(m({exact: true}).test('aaa='));
	t.true(m({exact: true}).test('aaaa'));
});

test('accepts all endings', t => {
	t.true(m({}).test('aaaabb=='));
	t.true(m({}).test('aaaabbb='));
	t.true(m({}).test('aaaabbbb'));

	t.true(m({}).test('base64: aaaabb== hello'));
	t.true(m({}).test('base64: aaaabbb= hello'));
	t.true(m({}).test('base64: aaaabbbb hello'));

	t.true(m({exact: true}).test('aaaabb=='));
	t.true(m({exact: true}).test('aaaabbb='));
	t.true(m({exact: true}).test('aaaabbbb'));
});
