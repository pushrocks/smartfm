import 'typings-global';
export declare type TFrontMatter = 'yaml' | 'json';
export interface IParsedFM {
    data: any;
    content: string;
    orig: string;
}
export interface ISmartfmContructorOptions {
    fmType: TFrontMatter;
}
/**
 * class smartfm handles frontmatter
 */
export declare class Smartfm {
    fmType: TFrontMatter;
    constructor(optionsArg: ISmartfmContructorOptions);
    /**
     * add frontmatter to a string
     */
    stringify(bodyString: string, frontmatterData: any): any;
    /**
     * parse a string that has frontmatter attached, YAML notation
     */
    parse(stringToParse: string): IParsedFM;
}
/**
 * parse a string that has frontmatter attached, YAML notation
 */
export declare let parse: (stringToParse: string) => IParsedFM;
/**
 * add frontmatter to a string
 */
export declare let stringify: (bodyString: string, frontmatterData: any) => any;
