# abbrev-kindof [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> `kind-of` with single letter abbreviations to javascript native types, like `kindof(val, 'soa')` will return true if `val` is string, object or array. useful for DB/Schema/Object validations

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i abbrev-kindof --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js

abbrevKindof(123, 'soa');
//=> false

abbrevKindof(['foo', 'bar'], 'soa');
//=> true

abbrevKindof('foo bar', 'soa');
//=> true

abbrevKindof({foo: 'bar'}, 'soa');
//=> true
```


# Possible abbreviations
- `a` for `array`
- `b` for `boolean`
- `f` for `function`
- `n` for `number`
- `o` for `object`
- `r` for `regexp`
- `s` for `string`
- `y` for `symbol`


## Related
- [assert-kindof](https://github.com/tunnckoCore/assert-kindof): Check native type of the given value and throw TypeError if not okey. Expressive, elegant, behavior-driven API, good descriptive default error messages, simple and clean syntax.
- [is-kindof](https://github.com/tunnckoCore/is-kindof): Thin wrapper around `kind-of` and in bonus functional api.
- [kind-of](https://github.com/jonschlinkert/kind-of): Get the native type of a value.
- [map-types](https://github.com/jonschlinkert/map-types): Map single letter abbreviations to javascript native types. Useful as a shorthand for pseudo-argument destructuring when debugging.


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/abbrev-kindof/issues/new).  
But before doing anything, pleas that read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/abbrev-kindof
[npmjs-img]: https://img.shields.io/npm/v/abbrev-kindof.svg?label=abbrev-kindof

[license-url]: https://github.com/tunnckoCore/abbrev-kindof/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/abbrev-kindof
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/abbrev-kindof.svg

[travis-url]: https://travis-ci.org/tunnckoCore/abbrev-kindof
[travis-img]: https://img.shields.io/travis/tunnckoCore/abbrev-kindof.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/abbrev-kindof
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/abbrev-kindof.svg

[david-url]: https://david-dm.org/tunnckoCore/abbrev-kindof
[david-img]: https://img.shields.io/david/tunnckoCore/abbrev-kindof.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg