import fs from 'fs'
import test from 'ava'
import stripWaybackToolbar from './'

const html = fs.readFileSync('./fixture.html', 'utf8')

test('it strips the js', t => {
  const result = stripWaybackToolbar(html)

  t.notRegex(result, /src="\/static\/js\/analytics\.js"/)
})

test('it strips the stylesheet', t => {
  const result = stripWaybackToolbar(html)

  t.notRegex(result, /href="\/static\/css\/banner-styles\.css"/)
})

test('it strips the toolbar', t => {
  const result = stripWaybackToolbar(html)

  t.notRegex(result, /BEGIN WAYBACK TOOLBAR INSERT/)
})
