'use strict';
var test = require('ava');
var base64Regex = require('./');

test('match base64 encoded string', function (t) {
	t.plan(7);

	var fixtures = [
		'dW5pY29ybg==',
		'Ym9hdA=='
	];

	fixtures.forEach(function (el) {
		t.assert(base64Regex({exact: true}).test(el), el);
	});

	t.assert(base64Regex().exec('asdasd dgggghey dW5pY29ybg== helllo')[0] === 'dW5pY29ybg==');

	// inline sourcemap
	var sources = [
	  '(function() {\nvar define = System.amdDefine;\ndefine(["github:components/jquery@2.1.4/jquery.js"], function(main) {\n  return main;\n});\n\n})();\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzcG1fcGFja2FnZXMvZ2l0aHViL2NvbXBvbmVudHMvanF1ZXJ5QDIuMS40LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0tBQUssQUFBQyxDQUFDLENBQUMsMENBQXlDLENBQUMsQ0FBQSxVQUFTLElBQUcsQ0FBRztBQUMvRCxPQUFPLEtBQUcsQ0FBQztDQUR5RCxDQUVwRTtBQUFBIiwiZmlsZSI6Im91dHB1dC5qcyJ9\n',
	  'System.registerDynamic(["lib/broken.js"], true, function($__require, exports, module) {\n  ;\n  var define,\n      global = this,\n      GLOBAL = this;\n  var foo = $__require(\'lib/broken.js\');\n  module.exports = {foo: foo};\n  return module.exports;\n});\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9yZXF1aXJlQnJva2VuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJLQUFLLGdCQUFnQixBQUFDLENBQUMsQ0FBQyxlQUFjLENBQUMsQ0FBRyxLQUFHLENBQUcsVUFBUyxVQUFTLENBQUcsQ0FBQSxPQUFNLENBQUcsQ0FBQSxNQUFLOztBQUMvRSxBQUFJLElBQUEsQ0FBQSxNQUFLO0FBQUcsV0FBSyxFQUFJLEtBQUc7QUFBRyxXQUFLLEVBQUksS0FBRyxDQUFDO0FBRHhDLElBQUEsQ0FBQSxHQUFFLGFBQUcsQUFBQyxDQUFDLGVBQWMsQ0FBQyxBQUFFLENBQUM7T0FFeEIsUUFBUSxFQUFJLEVBQ2YsR0FBRSxDQUFHLElBQUUsRUFDUjtPQUpNLENBQUEsTUFBSyxRQUFRLENBQUM7QUFBbUYsQ0FBQyxDQUFDIiwiZmlsZSI6Im91dHB1dC5qcyJ9\n',
	  'System.registerDynamic(["lib/stringExport.js"], true, function($__require, exports, module) {\n  ;\n  var define,\n      global = this,\n      GLOBAL = this;\n  var foo = $__require(\'lib/stringExport.js\');\n  module.exports = {foo: foo};\n  return module.exports;\n});\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9yZXF1aXJlV29ya2luZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiS0FBSyxnQkFBZ0IsQUFBQyxDQUFDLENBQUMscUJBQW9CLENBQUMsQ0FBRyxLQUFHLENBQUcsVUFBUyxVQUFTLENBQUcsQ0FBQSxPQUFNLENBQUcsQ0FBQSxNQUFLOztBQUNyRixBQUFJLElBQUEsQ0FBQSxNQUFLO0FBQUcsV0FBSyxFQUFJLEtBQUc7QUFBRyxXQUFLLEVBQUksS0FBRyxDQUFDO0FBRHhDLElBQUEsQ0FBQSxHQUFFLGFBQUcsQUFBQyxDQUFDLHFCQUFvQixDQUFDLEFBQUUsQ0FBQztPQUU5QixRQUFRLEVBQUksRUFDZixHQUFFLENBQUcsSUFBRSxFQUNSO09BSk0sQ0FBQSxNQUFLLFFBQVEsQ0FBQztBQUF5RixDQUFDLENBQUMiLCJmaWxlIjoib3V0cHV0LmpzIn0=\n',
	  'System.registerDynamic([], true, function($__require, exports, module) {\n  ;\n  var define,\n      global = this,\n      GLOBAL = this;\n  module.exports = \'foo\';\n  return module.exports;\n});\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9zdHJpbmdFeHBvcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IktBQUssZ0JBQWdCLEFBQUMsQ0FBQyxFQUFDLENBQUcsS0FBRyxDQUFHLFVBQVMsVUFBUyxDQUFHLENBQUEsT0FBTSxDQUFHLENBQUEsTUFBSzs7QUFDaEUsQUFBSSxJQUFBLENBQUEsTUFBSztBQUFHLFdBQUssRUFBSSxLQUFHO0FBQUcsV0FBSyxFQUFJLEtBQUcsQ0FBQztPQUR2QyxRQUFRLEVBQUksTUFBSSxDQUFDO09BQWYsQ0FBQSxNQUFLLFFBQVEsQ0FBQztBQUFvRSxDQUFDLENBQUMiLCJmaWxlIjoib3V0cHV0LmpzIn0=\n'
	];

	sources.forEach(function (source) {
		var encodedSourceMap = source.split('data:application/json;base64,').pop();
		t.assert(base64Regex().test(encodedSourceMap), encodedSourceMap);
	});
});
