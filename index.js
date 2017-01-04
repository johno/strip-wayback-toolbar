'use strict'

module.exports = html => {
  if (typeof html !== 'string') {
    throw new TypeError('strip-wayback-toolbar expected a string')
  }

  return html
    .replace(jsRegex, '')
    .replace(cssRegex, '')
    .replace(toolbarRegex, '')
}

const jsRegex = /<script type="text\/javascript" src="\/static\/js\/analytics.js"><\/script>/
const cssRegex = /<link type="text\/css" rel="stylesheet" href="\/static\/css\/banner-styles.css"\/>/
const toolbarRegex = /<\!-- BEGIN WAYBACK TOOLBAR INSERT -->((.|\n)*)<\!-- END WAYBACK TOOLBAR INSERT -->/
