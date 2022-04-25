const { isASACer } = require("./../code-challenges/asac-student");

test("absolutely you are :) since you have this repo cloned", () => {
  expect(isASACer()).toBe(true);
});
