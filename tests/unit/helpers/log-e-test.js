import { logE } from '#src/helpers/log-e';
import { module, test } from 'qunit';

module('Unit | Helper | logE', function () {
  test('logE works', function (assert) {
    const result = logE([0.5]);
    assert.strictEqual(Number(result.toFixed(3)), -0.693);
  });
});
