const config = require('../index');
const fs = require('fs');
const stylelint = require('stylelint');

const validCss = fs.readFileSync('./__tests__/css-valid.css', 'utf-8');
const invalidCss = fs.readFileSync('./__tests__/css-invalid.css', 'utf-8');

describe('flags no warnings with valid css', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: validCss,
      config,
    });
  });

  it('did not error', () => {
    return result.then(data => (
      expect(data.errored).toBeFalsy()
    ));
  });

  it('flags no warnings', () => {
    return result.then(data => (
      expect(data.results[0].warnings.length).toBe(0)
    ));
  });
});

describe('flags warnings with invalid css', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidCss,
      config,
    });
  });

  it('violates selector-max-specificity', () => {
    return result.then(data => {
      const warnings = data.results[0].warnings.filter(warning => warning.rule === 'selector-max-specificity');
      expect(warnings).toHaveLength(3);
      expect(warnings[0].line).toBe(1);
      expect(warnings[1].line).toBe(5);
      expect(warnings[2].line).toBe(9);
    });
  });

  it('violates selector-max-compound-selectors', () => {
    return result.then(data => {
      const warnings = data.results[0].warnings.filter(warning => warning.rule === 'selector-max-compound-selectors');
      expect(warnings).toHaveLength(1);
      expect(warnings[0].line).toBe(5);
    });
  });
});