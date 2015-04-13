# base64-regex [![Build Status](https://travis-ci.org/kevva/base64-regex.svg?branch=master)](https://travis-ci.org/kevva/base64-regex)

> Regular expression for matching base64 encoded strings


## Install

```
$ npm install --save base64-regex
```


## Usage

```js
var base64Regex = require('base64-regex');

base64Regex().test('dW5pY29ybg== foo bar');
//=> true

base64Regex({exact: true}).test('dW5pY29ybg== foo bar');
//=> false

base64Regex({exact: true}).test('dW5pY29ybg==');
//=> true

'foo dW5pY29ybg== bar Ym9hdA=='.match(base64Regex());
//=> ['dW5pY29ybg==', 'Ym9hdA==']
```


## API

### base64Regex(options)

Returns a regex for matching base64 encoded strings.

#### options.exact

Type: `boolean`  
Default: `false` *(Matches any base64 in a string)*

Only match an exact string.  
Useful with `RegExp#test` to check if a string is a base64 encoded string.


## License

MIT © [Kevin Mårtensson](http://kevinmartensson.com)
