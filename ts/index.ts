import * as grayMatter from 'gray-matter';

export type TFrontMatter = 'yaml' | 'json';

export interface ISmartfmContructorOptions {
  fmType: TFrontMatter;
}

/**
 * class smartfm handles frontmatter
 */
export class Smartfm {
  fmType: TFrontMatter;

  constructor(optionsArg: ISmartfmContructorOptions) {
    this.fmType = optionsArg.fmType;
  }

  /**
   * add frontmatter to a string
   */
  stringify(bodyString: string, frontmatterData: any) {
    return grayMatter.stringify(bodyString, frontmatterData);
  }

  /**
   * parse a string that has frontmatter attached, YAML notation
   */
  parse(stringToParse: string) {
    return grayMatter(stringToParse);
  }
}
