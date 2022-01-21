import shouldUpdate from "../src/15-0120/judgeVersion-chenzhiwen";
import rules from "./15-0120-judgeVersion-result";

let commonRules = rules.filter((rule) => !rule.external);
let externalRules = rules.filter((rule) => rule.external);

function testFn(ruleArr) {
  for (let i = 0; i < ruleArr.length; i++) {
    let oldVersion = ruleArr[i].oldVersion;
    let newVersion = ruleArr[i].newVersion;
    let result = ruleArr[i].result;
    test(`${oldVersion} with ${newVersion} should be ${result}`, () => {
      shouldUpdate(oldVersion, newVersion);
    });
  }
}

describe("根据版本号判断是否需要升级 X ∈ [0, 9]", () => {
  testFn(commonRules);
});

describe("根据版本号判断是否需要升级 X ∈ [0, 99]", () => {
  testFn(externalRules);
});
