'use strict';

require('mocha');
var assert = require('assert');
var isDotdir = require('./');

describe('is-dotdir', function() {
  var truthy = [
    '.git/foo',
    '.github/contributor.md',
    'a/.b/c/.gitignore',
    'a/.b/c/.git',
    'a/.b/c/a.js',
    'a/.git/c/a.js'
  ].forEach(function(filepath) {
    it('should be true: ' + filepath, function() {
      assert(isDotdir(filepath));
    });
  });

  var falsey = [
    '.editorconfig',
    '.git',
    '.travis.yml',
    'a/b.js',
    'a/b/c/d/e.js',
    '/.git',
    'a/.git',
    'a/.gitignore',
    'a/b.c.d/e.js',
    'a/b.c.d/e.js/.git',
    'a/b.js',
    'a/b/c/d/.git',
    'a/b/c/d/.gitignore',
    'a/b/c/d/e.js',
  ].forEach(function(filepath) {
    it('should be false: ' + filepath, function() {
      assert(!isDotdir(filepath));
    });
  });
});
