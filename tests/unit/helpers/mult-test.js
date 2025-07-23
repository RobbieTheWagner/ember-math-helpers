import { mult } from '#src/helpers/mult';
import { module, test } from 'qunit';

module('Unit | Helper | mult', function () {
  test('multiplication works', function (assert) {
    const result = mult([20, 10]);
    assert.strictEqual(result, 200);
  });

  test('multiplication of multiple arguments works', function (assert) {
    const result = mult([2, 2, 2, 2, 2, 3]);
    assert.strictEqual(result, 96);
  });
});
