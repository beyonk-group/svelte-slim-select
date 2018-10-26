const jsdom = require('mocha-jsdom')
const { expect } = require('code')
const pkg = require('../package.json')
const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const { input, plugins, output } = require('../rollup.config').default

describe('mocha tests', function () {
  jsdom({ url: 'http://localhost/' })

  let Component

  before(async () => {
    plugins.push(babel({
      exclude: 'node_modules/**'
    }))
    const bundle = await rollup.rollup({ input, plugins })
    await bundle.write(output.find(o => o.file === pkg.main))
    Component = require(`../${pkg.main}`)
  })

  it('has document', function () {
    var div = document.createElement('div')
    expect(div.nodeName).to.equal('DIV')
  })

  it('xyzabc', function () {
    const cmp = new Component({ target: document.body })
    expect(cmp.nodeName).to.equal('cmd')
  })
})
