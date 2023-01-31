'use strict';

module.exports = {
  extends: 'recommended',
  rules: {
    'no-curly-component-invocation': {
      allow: ['input', 'render-template', 'svg-jar'],
    },
    // TODO turn this back on when fixed https://github.com/ember-template-lint/ember-template-lint/issues/1135
    'no-quoteless-attributes': false,
  },
};
