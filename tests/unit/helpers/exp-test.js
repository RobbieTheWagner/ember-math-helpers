import { exp } from '#src/helpers/exp';
import { module, test } from 'qunit';

module('Unit | Helper | exp', function () {
  test('exp works', function (assert) {
    const result = exp([1]);
    assert.strictEqual(Number(result.toFixed(3)), 2.718);
  });
});
