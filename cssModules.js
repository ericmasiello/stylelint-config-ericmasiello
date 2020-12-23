const cssmodules = require('stylelint-config-css-modules');
const bemConfig = require('./bem');

module.exports = {
    ...bemConfig,
    extends: [].concat(bemConfig.extends).concat('stylelint-config-css-modules'),
    rules: {
        ...bemConfig.rules,
        /*
            Enforces camelCase with support BEM style modifiers.

            Examples:
            .sample {}
            .mySample {}
            .mySample--error {}
            .mySample--specialState {}
        */
        'selector-class-pattern': '^([a-z][a-zA-Z0-9]*)((-{2})[a-z][a-zA-Z0-9]+)*$',
        'property-no-unknown': [
            true,
            {
                ignoreProperties: [...cssmodules.rules['property-no-unknown'][1].ignoreProperties],
            },
        ],
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    ...bemConfig.rules['at-rule-no-unknown'][1].ignoreAtRules,
                    ...cssmodules.rules['at-rule-no-unknown'][1].ignoreAtRules,
                ],
            },
        ],
    },
}