import { mod } from '#src/helpers/mod';
import { module, test } from 'qunit';

module('Unit | Helper | mod', function () {
  test('modulus works', function (assert) {
    const result = mod([20, 10]);
    assert.strictEqual(result, 0);
  });

  test('modulus of multiple arguments works', function (assert) {
    const result = mod([10, 7, 2]);
    assert.strictEqual(result, 1);
  });
});
