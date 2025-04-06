'use strict';

const path = require('path');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let mathHelpersEntry = require.resolve('ember-math-helpers/addon-main');

  // We can never assume a node_modules structure
  let mathHelpersDir = path.dirname(mathHelpersEntry);

  const app = new EmberApp(defaults, {
    autoImport: {
      watchDependencies: ['ember-math-helpers'],
    },
    'ember-cli-babel': { enableTypeScriptTransform: true },
    'ember-cli-addon-docs': {
      documentingAddonAt: mathHelpersDir,
    },
    webpack: {
      node: {
        global: false,
        __filename: true,
        __dirname: true,
      },
      resolve: {
        fallback: {
          path: 'path-browserify',
        },
      },
    },
  });

  const { maybeEmbroider } = require('@embroider/test-setup');

  return maybeEmbroider(app);
};
