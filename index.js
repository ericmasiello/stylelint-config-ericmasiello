module.exports = {
  extends: 'stylelint-config-standard', 
  rules: {
    'selector-class-pattern': '^([a-z][a-z0-9]*)((__|-{1,2})[a-z0-9]+)*$',
    'selector-max-compound-selectors': 3,
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
