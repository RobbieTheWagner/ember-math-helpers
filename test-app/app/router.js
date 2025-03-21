import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from 'test-app/config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  docsRoute(this, function () {
    this.route('configuration');
    this.route('playground');
    this.route('usage');

    this.route('not-found', { path: '/*path' });
  });
});

export default Router;
