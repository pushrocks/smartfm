"use strict";
require("typings-test");
const should = require("should");
const smartfm = require("../dist/index");
describe('smartfm', function () {
    let testSmartfm = new smartfm.Smartfm;
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
        let testStringPure = `# some markdown heading
some first row`;
        let testStringCombined = testSmartfm.stringify(testStringPure, { testData: 'hi' });
        console.log(testStringCombined);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQixpQ0FBZ0M7QUFFaEMseUNBQXdDO0FBRXhDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7SUFDaEIsSUFBSSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFBO0lBQ3JDLEVBQUUsQ0FBQyxVQUFVLEVBQUU7UUFDWCxJQUFJLFVBQVUsR0FBRzs7OztnQkFJVCxDQUFBO1FBQ1IsSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNoRCxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzlELE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUMsWUFBWSxDQUFDLENBQUE7UUFDaEUsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDL0MsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsWUFBWSxFQUFFO1FBQ2IsSUFBSSxjQUFjLEdBQUc7ZUFDZCxDQUFBO1FBQ1AsSUFBSSxrQkFBa0IsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFBO1FBQ2hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUNuQyxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=