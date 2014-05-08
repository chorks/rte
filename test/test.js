/**
  * rte <https://github.com/jonschlinkert/rte>
  *
  * Copyright (c) 2014, Jon Schlinkert, Brian Woodward, contributors.
  * Licensed under the MIT License
  *
  */

var expect = require('chai').expect;
var Route = require('../');
var rte = new Route();

describe('rte:', function() {
  describe('paths', function() {
    it('should replace :basename', function() {
      var structure = ':dirname/:basename.:ext';
      var expected = {
        dirname: 'foo',
        basename: 'index',
        ext: '.html'
      };
      var actual = rte.parse('foo/index.html');
      expect(actual.dir).to.eql('foo');
    });
  });
});