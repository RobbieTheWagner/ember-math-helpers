import { atan2 } from '#src/helpers/atan2';
import { module, test } from 'qunit';

module('Unit | Helper | atan2', function () {
  test('atan2 works', function (assert) {
    const result = atan2([0, 1]);
    assert.strictEqual(result, 0);
  });
});
