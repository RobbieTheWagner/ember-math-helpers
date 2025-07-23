import { tan } from '#src/helpers/tan';
import { module, test } from 'qunit';

module('Unit | Helper | tan', function () {
  test('tan works', function (assert) {
    const result = tan([1]);
    assert.strictEqual(Number(result.toFixed(3)), 1.557);
  });
});
