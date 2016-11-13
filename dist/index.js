"use strict";
require("typings-global");
let grayMatter = require('gray-matter');
/**
 * class smartfm handles frontmatter
 */
class Smartfm {
    /**
     * add frontmatter to a string
     */
    stringify(bodyString, frontmatterData) {
        return exports.stringify(bodyString, frontmatterData);
    }
    /**
     * parse a string that has frontmatter attached, YAML notation
     */
    parse(stringToParse) {
        return exports.parse(stringToParse);
    }
}
exports.Smartfm = Smartfm;
/**
 * parse a string that has frontmatter attached, YAML notation
 */
exports.parse = (stringToParse) => {
    return grayMatter(stringToParse);
};
/**
 * add frontmatter to a string
 */
exports.stringify = (bodyString, frontmatterData) => {
    grayMatter.stringify(bodyString, frontmatterData);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQXVCO0FBQ3ZCLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQVF2Qzs7R0FFRztBQUNIO0lBQ0k7O09BRUc7SUFDSCxTQUFTLENBQUMsVUFBa0IsRUFBRSxlQUFvQjtRQUM5QyxNQUFNLENBQUMsaUJBQVMsQ0FBQyxVQUFVLEVBQUUsZUFBZSxDQUFDLENBQUE7SUFDakQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLGFBQXFCO1FBQ3ZCLE1BQU0sQ0FBQyxhQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDL0IsQ0FBQztDQUNKO0FBZEQsMEJBY0M7QUFFRDs7R0FFRztBQUNRLFFBQUEsS0FBSyxHQUFHLENBQUMsYUFBcUI7SUFDckMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUNwQyxDQUFDLENBQUE7QUFFRDs7R0FFRztBQUNRLFFBQUEsU0FBUyxHQUFHLENBQUMsVUFBa0IsRUFBRSxlQUFvQjtJQUM1RCxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUMsQ0FBQTtBQUNyRCxDQUFDLENBQUEifQ==