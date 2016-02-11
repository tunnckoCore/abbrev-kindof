# [abbrev-kindof][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Use abbreviations for checking type of given value. Like `kindof(val, 'soa')` to check that value is string, object or array.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i abbrev-kindof --save
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
const abbrevKindof = require('abbrev-kindof')
```

### [abbrevKindof](index.js#L31)
> Check type of a `val` with abbreviations.

**Params**

* `val` **{Mixed}**: value to check
* `type` **{String|Array}**: list of single-letter [(abbr) types](https://github.com/jonschlinkert/map-types)
* `returns` **{Boolean}**: if `true`, so `val` match one of the abbreviated types

**Example**

```js
// `soa` here means - string, object or array
abbrevKindof(123, 'soa')          //=> false
abbrevKindof('foo bar', 'soa')    //=> true
abbrevKindof({a: 123}, 'soa')     //=> true
abbrevKindof(['c', 'd'], 'soa')   //=> true
```

## Available abbreviations
> Using [map-types](https://github.com/jonschlinkert/map-types)

- `a` for `array`
- `b` for `boolean`
- `f` for `function`
- `n` for `number`
- `o` for `object`
- `r` for `regexp`
- `s` for `string`
- `y` for `symbol`


## Related Libs
* [assert-kindof](https://www.npmjs.com/package/assert-kindof): Check native type of the given value and throw TypeError if not okey. Expressive, elegant, behavior-driven API, good descriptive default error messages, simple and clean syntax. | [homepage](https://github.com/tunnckoCore/assert-kindof)
* [is-kindof](https://www.npmjs.com/package/is-kindof): Check type of given javascript value. Support promises, generators, streams, and native types. Thin wrapper around `kind-of` module. | [homepage](https://github.com/tunnckocore/is-kindof)
* [kind-error](https://www.npmjs.com/package/kind-error): Base class for easily creating meaningful and quiet by default Error classes with sane defaults and assertion in mind. | [homepage](https://github.com/tunnckocore/kind-error)
* [kind-of](https://www.npmjs.com/package/kind-of): Get the native type of a value. | [homepage](https://github.com/jonschlinkert/kind-of)
* [kind-of-extra](https://www.npmjs.com/package/kind-of-extra): Extends `kind-of` type check utility with support for promises, generators, streams and errors. Like `kindof(Promise.resolve(1)) === 'promise'` and etc. | [homepage](https://github.com/tunnckocore/kind-of-extra)
* [kind-of-types](https://www.npmjs.com/package/kind-of-types): List of all javascript types. Used and useful for checking, validation, sanitizing and testing. Like isStream, isPromise, isWeakset and etc. | [homepage](https://github.com/tunnckocore/kind-of-types)


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/abbrev-kindof/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/abbrev-kindof
[npmjs-img]: https://img.shields.io/npm/v/abbrev-kindof.svg?label=abbrev-kindof

[license-url]: https://github.com/tunnckoCore/abbrev-kindof/blob/master/LICENSE
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
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg