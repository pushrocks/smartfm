import { tap, expect } from '@pushrocks/tapbundle';

import * as smartfm from '../ts/index';

let testSmartfm = new smartfm.Smartfm({ fmType: 'yaml' });
tap.test('.parse()', async () => {
  let testString = `---
testKey: testValue
testKey2: testValue2
---
# some markdown
`;
  let parsedString = testSmartfm.parse(testString);
  expect(parsedString.data).to.have.property('testKey', 'testValue');
  expect(parsedString.data).to.have.property('testKey2', 'testValue2');
  expect(parsedString.orig.toString()).to.equal(testString);
});
tap.test('should stringify data', async () => {
  let testStringPure = `# some markdown heading\nsome first row`;
  let testStringCombined = testSmartfm.stringify(testStringPure, { testData: 'hi' });
  let resultString = '---\ntestData: hi\n---\n# some markdown heading\nsome first row\n';
  expect(resultString).to.equal(testStringCombined);
});

tap.test('should parse a normal frontmatter file', async () => {
  const normalFile = `---
heythere: awesome
---
really 
`;
  let result = testSmartfm.parse(normalFile);
  expect(result.data.heythere).to.equal('awesome')
});

tap.test('should parse a commented out frontmatter file', async () => {
  const commentedFile = `# ---
# heythere: awesome
# ---
really 
`;
  let result = testSmartfm.parseFromComments('# ', commentedFile);
  console.log(result);
});

tap.start();
