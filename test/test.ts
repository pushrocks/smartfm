import { tap, expect } from 'tapbundle'

import * as smartfm from '../dist/index'


let testSmartfm = new smartfm.Smartfm({ fmType: 'yaml' })
tap.test('.parse()', async () => {
  let testString = `---
testKey: testValue
testKey2: testValue2
---
# some markdown
`
  let parsedString = testSmartfm.parse(testString)
  expect(parsedString.data).to.have.property('testKey', 'testValue')
  expect(parsedString.data).to.have.property('testKey2', 'testValue2')
  expect(parsedString.orig).to.equal(testString)
})
tap.test('.stringify', async () => {
  let testStringPure = `# some markdown heading\nsome first row`
  let testStringCombined = testSmartfm.stringify(testStringPure, { testData: 'hi' })
  let resultString = '---\ntestData: hi\n---\n# some markdown heading\nsome first row\n'
  expect(resultString).to.equal(testStringCombined)
})

tap.start()
