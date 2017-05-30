/*!
 * is-dotdir <https://github.com/jonschlinkert/is-dotdir>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var dotdirRegex = require('dotdir-regex');

module.exports = function(str) {
  return dotdirRegex().test(str);
};
