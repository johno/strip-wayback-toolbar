import fs from 'fs'
import test from 'ava'
import stripWaybackToolbar from './'

const html = fs.readFileSync('./fixture.html', 'utf8')

test('it strips the js', t => {
  const result = stripWaybackToolbar(html)

  t.is(result.indexOf('analytics.js?v='), -1)
})

test('it strips the stylesheet', t => {
  t.plan(2)

  const result = stripWaybackToolbar(html)

  t.is(result.indexOf('banner-styles.css'), -1)
  t.is(result.indexOf('iconochive'), -1)
})

test('it strips the toolbar', t => {
  const result = stripWaybackToolbar(html)

  t.notRegex(result, /BEGIN WAYBACK TOOLBAR INSERT/)
})
