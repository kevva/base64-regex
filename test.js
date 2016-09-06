import test from 'ava';
import fixtures from './fixtures';
import m from './';

test('match base64 encoded string', t => {
	const fixtures = [
		'dW5pY29ybg==',
		'Ym9hdA=='
	];

	for (const x of fixtures) {
		t.true(m({exact: true}).test(x));
	}

	t.is(m().exec('asdasd dgggghey dW5pY29ybg== helllo')[0], 'dW5pY29ybg==');
});

test('match inline sourcemaps', t => {
	for (const x of fixtures) {
		t.true(m().test(x.split('data:application/json;base64,').pop()));
	}
});
