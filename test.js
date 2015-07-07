'use strict';

/* deps: mocha */
var assert = require('assert');
var isDotdir = require('./');

it('should return false when the file is not a dot-directory', function () {
  assert.equal(isDotdir('a/b/c/d/e.js'), false);
  assert.equal(isDotdir('a/b.c.d/e.js'), false);
  assert.equal(isDotdir('a/b.js'), false);
  assert.equal(isDotdir('a/b/c/d/.git'), false);
  assert.equal(isDotdir('a/.git'), false);
  assert.equal(isDotdir('.git'), false);
  assert.equal(isDotdir('/.git'), false);
});

it('should return true when the file is a dot-directory', function () {
  assert.equal(isDotdir('a/.b/c/.git'), true);
  assert.equal(isDotdir('a/.b/c/a.js'), true);
  assert.equal(isDotdir('.git/foo'), true);
});
