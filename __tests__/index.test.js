const config = require("../index")
const fs = require("fs")
const stylelint = require("stylelint")

const validCss = fs.readFileSync("./__tests__/css-valid.css", "utf-8")

describe("flags no warnings with valid css", () => {
  let result

  beforeEach(() => {
    result = stylelint.lint({
      code: validCss,
      config,
    });
  });


  it("did not error", () => {
    return result.then(data => (
      expect(data.errored).toBeFalsy()
    ));
  });

  it("flags no warnings", () => {
    return result.then(data => (
      expect(data.results[0].warnings.length).toBe(0)
    ));
  });
});