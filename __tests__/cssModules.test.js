const { cssModules: config } = require('..');
const fs = require('fs');
const stylelint = require('stylelint');

const validSelectorsCss = fs.readFileSync('./__fixtures__/cssModules-css-valid.css', 'utf-8');
const invalidSelectorsCss = fs.readFileSync('./__fixtures__/cssModules-css-invalid.css', 'utf-8');
const invalidSpecificityCss = fs.readFileSync('./__fixtures__/specificity-css-invalid.css', 'utf-8');

describe('flags no warnings with valid selectors css', () => {
    let result;

    beforeEach(() => {
        result = stylelint.lint({
            code: validSelectorsCss,
            config,
        });
    });

    it('did not error', () => {
        return result.then(data => expect(data.errored).toBeFalsy());
    });

    it('flags no warnings', () => {
        return result.then(data => expect(data.results[0].warnings.length).toBe(0));
    });
});

describe('flags warnings with invalid specificty', () => {
    let result;

    beforeEach(() => {
        result = stylelint.lint({
            code: invalidSpecificityCss,
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
            const warnings = data.results[0].warnings.filter(
                warning => warning.rule === 'selector-max-compound-selectors'
            );
            expect(warnings).toHaveLength(1);
            expect(warnings[0].line).toBe(5);
        });
    });
});

describe('flags warnings with invalid selectors css', () => {
    let result;

    beforeEach(() => {
        result = stylelint.lint({
            code: invalidSelectorsCss,
            config,
        });
    });
    it('violates selector-class-pattern', () => {
        const erroneousLineNumbers = [3, 7, 11, 15, 19, 23, 27, 31, 35];
        return result.then(data => {
            const warnings = data.results[0].warnings.filter(warning => warning.rule === 'selector-class-pattern');
            expect(warnings).toHaveLength(erroneousLineNumbers.length);
            erroneousLineNumbers.forEach((lineNumber, i) => {
                expect(warnings[i].line).toBe(lineNumber);
            });
        });
    });
});
