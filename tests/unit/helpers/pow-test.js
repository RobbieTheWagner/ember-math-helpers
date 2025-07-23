import { pow } from '#src/helpers/pow';
import { module, test } from 'qunit';

module('Unit | Helper | pow', function () {
  test('pow works', function (assert) {
    const result = pow([7, 2]);
    assert.strictEqual(result, 49);
  });

  test('negative base works', function (assert) {
    const result = pow([-7, 2]);
    assert.strictEqual(result, 49);
  });

  test('negative exponent works', function (assert) {
    const result = pow([2, -2]);
    assert.strictEqual(result, 0.25);
  });
});
