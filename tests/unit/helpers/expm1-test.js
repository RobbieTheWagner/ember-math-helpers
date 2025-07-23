import { expm1 } from '#src/helpers/expm1';
import { module, test } from 'qunit';

module('Unit | Helper | expm1', function () {
  test('expm1 works', function (assert) {
    const result = expm1([1]);
    assert.strictEqual(Number(result.toFixed(3)), 1.718);
  });
});
