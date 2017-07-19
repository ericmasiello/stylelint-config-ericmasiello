module.exports = {
  extends: 'stylelint-config-standard', 
  rules: {
    'selector-max-id': 0,
    'selector-max-compound-selectors': 0,
    'selector-max-specificity': '0,3,3',
    'at-rule-empty-line-before': null,
    'declaration-empty-line-before': null,
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'mixin',
        'extend',
        'include',
        'function',
        'return',
        'if',
        'else',
        'for',
        'while',
        'each',
        'content',
        'at-root',
        'debug',
        'warn',
        'error',
      ],
    }],
  },
};
