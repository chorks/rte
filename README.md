# rte [![NPM version](https://badge.fury.io/js/rte.png)](http://badge.fury.io/js/rte)

> Simple, server-side routing to complement the node.js path module.

## Table of Contents

<!-- toc -->
* [Install](#install)
* [Tests](#tests)
* [Getting started](#getting-started)
* [API](#api)
  * [Route](#route)
  * [.set ( key, value )](#set-key-value)
  * [.get ( key )](#get-key)
  * [.stringify ( name, context )](#stringify-name-context)
  * [.generate ( filepath, options )](#generate-filepath-options)
  * [.parse](#parse)
  * [.dest ( filepath, options )](#dest-filepath-options)
* [Contributing](#contributing)
* [Authors](#authors)
* [License](#license)

<!-- toc stop -->
## Install
Install with [npm](npmjs.org):

```bash
npm i rte --save-dev
```

## Tests

Run `mocha` or `npm test` to run the tests. [Visit the tests](test) to learn how this works.

## Getting started

Create a new instance:

```js
// optionally pass a default `context`
var rte = new Route({
  root: '_gh_pages',
  ext: '.html'
});
```

Next, define some routes to use:

```js
rte.set('site', ':root/:basename/index:ext');
rte.set('blog', ':root/blog/:basename/index:ext');
```

Last, generate your destination paths:

```js
// use the `site` route to create the dest filepath
var dest = rte.dest('src/templates/about.hbs', 'site');
// => '_gh_pages/about/index.html'

// use the `blog` route to create the dest filepath
var dest = rte.dest('src/templates/about.hbs', 'site');
// => '_gh_pages/blog/about/index.html'
```

Override the default context:

```js
var dest = rte.dest('src/templates/about.hbs', 'site', {root: 'dist'});
// => 'dist/blog/about/index.html'
```

## API
### Route

Define a new instance of Route, optionally passing a default context object.

**Example**

```js
var route = new Route({base: 'dist'});
```

* `type` {String}:  
* `return`  


### .set ( key, value )

Set or get a route by name.

```js
route.set('dest', ':base/:dirname/:basename/index.html');
```

* `name` {String}:  
* `value` {String}:  
* `return`  


### .get ( key )

Get a route by name.

```js
route.get('dest');
// ':base/:dirname/:basename/index.html'
```

* `key` {String}:  
* `return`  


### .stringify ( name, context )

Build a URL/filepath string from the properties on the given object.

```js
route.set('dist', ':root/:basename/index.html');
route.stringify('dist', {root: '_gh_pages', basename: 'foo'});
//=> '_gh_pages/foo/index.html'
```

* `key` {String}:  
* `context` {Object}:  
* `return`  


### .generate ( filepath, options )

Generate a file path using the [generate](lib/generate.js) utility.

```js
route.generate ('a/b/c.hbs', {ext: '.html'})
//=> 'a/b/c.html'
```

* `filepath` {String}:  
* `options` {Object}:  
* `return`  


### .parse

Parse the filepath into an object using the named route and the node.js path module.

```js
route.parse (filepath, name, options)
```

* `filepath` {String}:  
* `name` {String}: The name of the route to use 
* `options` {Object}:  
* `return`  


### .dest ( filepath, options )

Facade for `.parse()`, returning only the `dest` value.

```js
route.dest (filepath, name, options)
```

* `filepath` {String}:  
* `name` {String}: The name of the route to use 
* `options` {Object}:  
* `return`

## Contributing
Find a bug? Have a feature request? Please [create an Issue](https://github.com/jonschlinkert/rte/issues).

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality,
and run `docs` in the command line to build the docs with [Verb](https://github.com/assemble/verb).

Pull requests are also encouraged, and if you find this project useful please consider "starring" it to show your support! Thanks!

## Authors

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on June 12, 2014._