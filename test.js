'use strict';
var test = require('ava');
var base64Regex = require('./');

test('match base64 encoded string', function (t) {
	t.plan(4);

	var fixtures = [
		'dW5pY29ybg==',
		'Ym9hdA=='
	];

	fixtures.forEach(function (el) {
		t.assert(base64Regex({exact: true}).test(el), el);
	});

	t.assert(base64Regex().exec('asdasd dgggghey dW5pY29ybg== helllo')[0] === 'dW5pY29ybg==');

	// inline sourcemap
	var sourceMapString = '//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IktBQUssZ0JBQWdCLEFBQUMsQ0FBQyxFQUFDLENBQUcsTUFBSSxDQUFHLFVBQVMsVUFBUyxDQUFHLENBQUEsVUFBUyxDQUFHLENBQUEsU0FBUSxDQUFHO0FBQzFFLElBQUEsQ0FBQSxlQUFjLEVBQUksQ0FBQSxNQUFLLElBQUksQUFBQyxDQUFDLGtCQUFpQixDQUFDLGNBQWMsQUFBQyxDQUFDLFNBQVEsR0FBRyxDQUFHLEtBQUcsQ0FBRyxLQUFHLENBQUMsQ0FBQztBQUMxRixXQUZNLEFBQUM7VUFBSCxJQUFJLEFBQUMsQ0FBQyxhQUFZLENBQUMsQ0FBQztHQUVOLEFBQUMsRUFBQyxDQUFDO0FBQ3JCLE9BQU8sQ0FBQSxlQUFjLEFBQUMsRUFBQyxDQUFDO0NBQ3pCLENBQUMiLCJmaWxlIjoib3V0cHV0LmpzIn0=';
	t.assert(base64Regex().test(sourceMapString), 'sourcemap no matched');
});
