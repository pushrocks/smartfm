# smartfm
smartfm handles frontmatter of files

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/smartfm)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://gitlab.com/pushrocks/smartfm)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/smartfm)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/smartfm/)

## Status for master
[![build status](https://gitlab.com/pushrocks/smartfm/badges/master/build.svg)](https://gitlab.com/pushrocks/smartfm/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartfm/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartfm/commits/master)
[![Dependency Status](https://david-dm.org/pushrocks/smartfm.svg)](https://david-dm.org/pushrocks/smartfm)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smartfm/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smartfm/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartfm/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartfm)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage

say you have the following markdown file:
```markdown
---
title: A really awesome article
date: 23-10-2020
type: feature
---
# A Awesome Title
The world is cool. And here is why
* reason 1
* reason 2
```

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

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)
