import 'typings-test'
import * as should from 'should'

import * as smartfm from '../dist/index'

describe('smartfm', function() {
    let testSmartfm = new smartfm.Smartfm
    it('.parse()', function() {
        let testString = `---
testKey: testValue
testKey2: testValue2
---
# some markdown`
        let parsedString = testSmartfm.parse(testString)
        should(parsedString.data).have.property('testKey','testValue')
        should(parsedString.data).have.property('testKey2','testValue2')
        should(parsedString.orig).equal(testString)
    })
    it('.stringify', function(){
        let testStringPure = `# some markdown heading
some first row`
        let testStringCombined = testSmartfm.stringify(testStringPure, {testData: 'hi'})
        console.log(testStringCombined)
    })
})
