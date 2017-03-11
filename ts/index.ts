import 'typings-global'
let grayMatter = require('gray-matter')

export type TFrontMatter = 'yaml' | 'json'

export interface IParsedFM {
  data: any
  content: string
  orig: string
}

export interface ISmartfmContructorOptions {
  fmType: TFrontMatter
}

/**
 * class smartfm handles frontmatter
 */
export class Smartfm {
  fmType: TFrontMatter

  constructor(optionsArg: ISmartfmContructorOptions) {
    this.fmType = optionsArg.fmType
  }

  /**
   * add frontmatter to a string
   */
  stringify(bodyString: string, frontmatterData: any) {
    return stringify(bodyString, frontmatterData)
  }

  /**
   * parse a string that has frontmatter attached, YAML notation
   */
  parse(stringToParse: string): IParsedFM {
    return parse(stringToParse)
  }
}

/**
 * parse a string that has frontmatter attached, YAML notation
 */
export let parse = (stringToParse: string): IParsedFM => {
  return grayMatter(stringToParse)
}

/**
 * add frontmatter to a string
 */
export let stringify = (bodyString: string, frontmatterData: any) => {
  return grayMatter.stringify(bodyString, frontmatterData)
}
