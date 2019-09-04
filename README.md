# @pushrocks/smartfm
frontmatter done right

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartfm)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smartfm)
* [github.com (source mirror)](https://github.com/pushrocks/smartfm)
* [docs (typedoc)](https://pushrocks.gitlab.io/smartfm/)

## Status for master
[![build status](https://gitlab.com/pushrocks/smartfm/badges/master/build.svg)](https://gitlab.com/pushrocks/smartfm/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartfm/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartfm/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@pushrocks/smartfm.svg)](https://www.npmjs.com/package/@pushrocks/smartfm)
[![Known Vulnerabilities](https://snyk.io/test/npm/@pushrocks/smartfm/badge.svg)](https://snyk.io/test/npm/@pushrocks/smartfm)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

## Usage

We recommend TypeScript for best in class Intellisense.

```javascript
import * as smartfm from * smartfm

let markdownfile = `---
testKey: testValue
testKey2: testValue2
---
# some markdown`

// easy methods
let parsedData = smartfm.parse(markdownfile)

// parsedData will be object
/*
    {
        data: {
            testKey: testValue,
            testKey2: testValue2
        },
        content: '# some markdown',
        orig: '---\ntestKey: testValue\ntestKey2: testValue2\n---\n# some markdown'
    }
*/

let newFmString = smartfm.stringify('My awesome string', {testKey1: testValue1})
// newFmString will be '---\testKey1: testValue1\n---\nMyawesomeString'

# class Smartfm
let mySmartfm = new smartfm.Smartfm({
    fmType: 'yaml' // can be yaml or json atm
})
```

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
