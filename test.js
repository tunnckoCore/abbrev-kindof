/*!
 * abbrev-kindof <https://github.com/tunnckoCore/abbrev-kindof>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var abbrevKindof = require('./index')

test('should work with single abbrev', function (done) {
  test.strictEqual(abbrevKindof(123, 's'), false)
  test.strictEqual(abbrevKindof(123, 'n'), true)
  done()
})

test('should work with multiple abbrevs', function (done) {
  var foobar_object = {foo: 'bar'}
  var foobar_regexp = /(foo|bar)/g
  var foobar_string = 'foo bar'
  var foobar_array = ['foo', 'bar']

  test.strictEqual(abbrevKindof(foobar_object, 'sa'), false)
  test.strictEqual(abbrevKindof(foobar_regexp, 'sa'), false)
  test.strictEqual(abbrevKindof(foobar_string, 'sa'), true)
  test.strictEqual(abbrevKindof(foobar_array, 'sa'), true)
  done()
})
