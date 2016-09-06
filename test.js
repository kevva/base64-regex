import test from 'ava';
import m from './';

const fixtures = [
	'dW5pY29ybg==',
	'Ym9hdA=='
];

test('match base64 encoded string', t => {
	for (const x of fixtures) {
		t.true(m({exact: true}).test(x));
	}

	t.is(m().exec('asdasd dgggghey dW5pY29ybg== helllo')[0], 'dW5pY29ybg==');
});
