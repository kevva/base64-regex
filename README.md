# base64-regex [![Build Status](https://travis-ci.org/kevva/base64-regex.svg?branch=master)](https://travis-ci.org/kevva/base64-regex)

> Regular expression for matching base64 encoded strings

## Install

```sh
$ npm install --save base64-regex
```

## Usage

```js
var base64Regex = require('base64-regex');

base64Regex().test('dW5pY29ybg==');
//=> true

base64Regex().exec('Hello this is dW5pY29ybg==')[0].trim();
//=> dW5pY29ybg==

'Multiple dW5pY29ybg== Ym9hdA== base64 encoded strings'.match(base64Regex());
//=> ['dW5pY29ybg==', 'Ym9hdA==']
```

## License

MIT © [Kevin Mårtensson](http://kevinmartensson.com)
