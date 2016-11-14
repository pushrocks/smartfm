"use strict";
require("typings-test");
const should = require("should");
const smartfm = require("../dist/index");
describe('smartfm', function () {
    let testSmartfm = new smartfm.Smartfm({ fmType: 'yaml' });
    it('.parse()', function () {
        let testString = `---
testKey: testValue
testKey2: testValue2
---
# some markdown`;
        let parsedString = testSmartfm.parse(testString);
        should(parsedString.data).have.property('testKey', 'testValue');
        should(parsedString.data).have.property('testKey2', 'testValue2');
        should(parsedString.orig).equal(testString);
    });
    it('.stringify', function () {
        let testStringPure = `# some markdown heading\nsome first row`;
        let testStringCombined = testSmartfm.stringify(testStringPure, { testData: 'hi' });
        let resultString = '---\ntestData: hi\n---\n# some markdown heading\nsome first row\n';
        should(resultString).equal(testStringCombined);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQixpQ0FBZ0M7QUFFaEMseUNBQXdDO0FBRXhDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7SUFDaEIsSUFBSSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFDekQsRUFBRSxDQUFDLFVBQVUsRUFBRTtRQUNYLElBQUksVUFBVSxHQUFHOzs7O2dCQUlULENBQUE7UUFDUixJQUFJLFlBQVksR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ2hELE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUE7UUFDL0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQTtRQUNqRSxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUMvQyxDQUFDLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyxZQUFZLEVBQUU7UUFDYixJQUFJLGNBQWMsR0FBRyx5Q0FBeUMsQ0FBQTtRQUM5RCxJQUFJLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7UUFDbEYsSUFBSSxZQUFZLEdBQUcsbUVBQW1FLENBQUE7UUFDdEYsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQ2xELENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==