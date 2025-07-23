import { cosh } from '#src/helpers/cosh';
import { module, test } from 'qunit';

module('Unit | Helper | cosh', function () {
  test('cosh works', function (assert) {
    const result = cosh([0]);
    assert.strictEqual(result, 1);
  });
});
