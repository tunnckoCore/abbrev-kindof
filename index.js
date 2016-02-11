/*!
 * abbrev-kindof <https://github.com/tunnckoCore/abbrev-kindof>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var abbrev = require('map-types')
var kindOf = require('kind-of')

/**
 * > Check type of a `val` with abbreviations.
 *
 * **Example**
 *
 * ```js
 * // `soa` here means - string, object or array
 * abbrevKindof(123, 'soa')          //=> false
 * abbrevKindof('foo bar', 'soa')    //=> true
 * abbrevKindof({a: 123}, 'soa')     //=> true
 * abbrevKindof(['c', 'd'], 'soa')   //=> true
 * ```
 *
 * @param  {Mixed} `val` value to check
 * @param  {String|Array} `type` list of single-letter [(abbr) types](https://github.com/jonschlinkert/map-types)
 * @return {Boolean} if `true`, so `val` match one of the abbreviated types
 * @api public
 */
module.exports = function abbrevKindof (val, type) {
  var abbrs = abbrev(type)
  var len = abbrs.length
  var i = -1

  while (i++ < len) {
    type = abbrs[i]
    var next = abbrs[i + 1]
    if (next) {
      return !(val && kindOf(val) !== type && kindOf(val) !== next)
    }
    return !(val && kindOf(val) !== type)
  }
}
