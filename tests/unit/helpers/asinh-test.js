import { asinh } from '#src/helpers/asinh';
import { module, test } from 'qunit';

module('Unit | Helper | asinh', function () {
  test('asinh works', function (assert) {
    const result = asinh([0]);
    assert.strictEqual(result, 0);
  });
});
