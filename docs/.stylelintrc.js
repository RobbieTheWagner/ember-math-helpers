'use strict';

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['screen', 'tailwind'] }],
    'no-descending-specificity': null,
    'no-invalid-position-at-import-rule': null,
    'selector-class-pattern': null,
  },
};
