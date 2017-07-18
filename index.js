module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'selector-max-id': 0,
    'selector-max-compound-selectors': 3,
    'selector-max-specificity': '0,3,3',
  }
};
