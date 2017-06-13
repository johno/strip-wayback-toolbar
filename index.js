'use strict'

module.exports = html => {
  if (typeof html !== 'string') {
    throw new TypeError('strip-wayback-toolbar expected a string')
  }

  return html
    .replace(assetRegex, '<head>')
    .replace(toolbarRegex, '')
}

const assetRegex = /<head>((.|\n)*)<\!-- End Wayback Rewrite JS Include -->/
const toolbarRegex = /<\!-- BEGIN WAYBACK TOOLBAR INSERT -->((.|\n)*)<\!-- END WAYBACK TOOLBAR INSERT -->/
