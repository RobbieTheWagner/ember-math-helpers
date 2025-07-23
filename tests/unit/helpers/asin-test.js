import { asin } from '#src/helpers/asin';
import { module, test } from 'qunit';

module('Unit | Helper | asin', function () {
  test('asin works', function (assert) {
    const result = asin([0]);
    assert.strictEqual(result, 0);
  });
});
