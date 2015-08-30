/*!
 * abbrev-kindof <https://github.com/tunnckoCore/abbrev-kindof>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var abbrev = require('map-types')
var kindOf = require('kind-of')

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
