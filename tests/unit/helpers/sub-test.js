import { sub } from '#src/helpers/sub';
import { module, test } from 'qunit';

module('Unit | Helper | sub', function () {
  test('subtraction works', function (assert) {
    const result = sub([20, 10]);
    assert.strictEqual(result, 10);
  });

  test('subtraction of multiple arguments works', function (assert) {
    const result = sub([5, 4, 2, -9]);
    assert.strictEqual(result, 8);
  });
});
