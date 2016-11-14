"use strict";
require("typings-global");
let grayMatter = require('gray-matter');
/**
 * class smartfm handles frontmatter
 */
class Smartfm {
    constructor(optionsArg) {
        this.fmType = optionsArg.fmType;
    }
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
    return grayMatter.stringify(bodyString, frontmatterData);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQXVCO0FBQ3ZCLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQWN2Qzs7R0FFRztBQUNIO0lBR0ksWUFBWSxVQUFxQztRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUE7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsU0FBUyxDQUFDLFVBQWtCLEVBQUUsZUFBb0I7UUFDOUMsTUFBTSxDQUFDLGlCQUFTLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxhQUFxQjtRQUN2QixNQUFNLENBQUMsYUFBSyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQy9CLENBQUM7Q0FDSjtBQXBCRCwwQkFvQkM7QUFFRDs7R0FFRztBQUNRLFFBQUEsS0FBSyxHQUFHLENBQUMsYUFBcUI7SUFDckMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUNwQyxDQUFDLENBQUE7QUFFRDs7R0FFRztBQUNRLFFBQUEsU0FBUyxHQUFHLENBQUMsVUFBa0IsRUFBRSxlQUFvQjtJQUM1RCxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsZUFBZSxDQUFDLENBQUE7QUFDNUQsQ0FBQyxDQUFBIn0=