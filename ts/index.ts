import grayMatter from 'gray-matter';

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

  /**
   * parse from commnets
   */
  parseFromComments(commentStart: string, stringToParse: string) {
    const diffFunc = (diffMe, diffBy) => diffMe.split(diffBy).join('');
    let lines = stringToParse.split('\n');
    lines = lines.map(line => {
      return diffFunc(line, commentStart);
    });
    const cleanedString = lines.join('\n');
    return this.parse(cleanedString);
  }
}
