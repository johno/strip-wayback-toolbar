# strip-wayback-toolbar [![Build Status](https://secure.travis-ci.org/johnotander/strip-wayback-toolbar.svg?branch=master)](https://travis-ci.org/johnotander/strip-wayback-toolbar) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Strip wayback toolbar from archived html.

## Installation

```bash
npm install --save strip-wayback-toolbar
```

## Usage

```javascript
const stripWaybackToolbar = require('strip-wayback-toolbar')
const html = require('fs').readFileSync('site.html', 'utf8')

stripWaybackToolbar(html)
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
