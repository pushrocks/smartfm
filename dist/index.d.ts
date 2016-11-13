import 'typings-global';
export interface IParsedFM {
    data: any;
    content: string;
    orig: string;
}
/**
 * class smartfm handles frontmatter
 */
export declare class Smartfm {
    /**
     * add frontmatter to a string
     */
    stringify(bodyString: string, frontmatterData: any): void;
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
export declare let stringify: (bodyString: string, frontmatterData: any) => void;
