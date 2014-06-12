/**
 * rte <https://github.com/jonschlinkert/rte>
 *
 * Copyright (c) 2014, Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT License
 *
 */

var expect = require('chai').expect;
var generate = require('../lib/generate');

describe('utils.generate()', function() {
  describe('when a path is passed:', function() {
    it('should return the extension from options.ext', function() {
      var actual = generate('foo/bar/baz.min.js', {ext: '.foo'});
      expect(actual).to.eql('foo/bar/baz.min.foo');
    });

  });
});

