"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF1QjtBQUN2QixJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7QUFjdkM7O0dBRUc7QUFDSDtJQUdFLFlBQVksVUFBcUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFBO0lBQ2pDLENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVMsQ0FBQyxVQUFrQixFQUFFLGVBQW9CO1FBQ2hELE1BQU0sQ0FBQyxpQkFBUyxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsYUFBcUI7UUFDekIsTUFBTSxDQUFDLGFBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUM3QixDQUFDO0NBQ0Y7QUFwQkQsMEJBb0JDO0FBRUQ7O0dBRUc7QUFDUSxRQUFBLEtBQUssR0FBRyxDQUFDLGFBQXFCO0lBQ3ZDLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDbEMsQ0FBQyxDQUFBO0FBRUQ7O0dBRUc7QUFDUSxRQUFBLFNBQVMsR0FBRyxDQUFDLFVBQWtCLEVBQUUsZUFBb0I7SUFDOUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQyxDQUFBO0FBQzFELENBQUMsQ0FBQSJ9