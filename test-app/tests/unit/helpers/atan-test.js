import { atan } from 'ember-math-helpers/helpers/atan';
import { module, test } from 'qunit';

module('Unit | Helper | atan', function () {
  test('atan works', function (assert) {
    const result = atan([0]);
    assert.strictEqual(result, 0);
  });
});
