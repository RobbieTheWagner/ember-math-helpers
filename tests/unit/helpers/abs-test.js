import { abs } from '#src/helpers/abs';
import { module, test } from 'qunit';

module('Unit | Helper | abs', function () {
  test('absolute value works', function (assert) {
    let result;
    result = abs([-1]);
    assert.strictEqual(result, 1);
    result = abs([1]);
    assert.strictEqual(result, 1);
  });

  test('absolute value of `null`, empty string, and empty array all equal 0', function (assert) {
    let result;
    result = abs([null]);
    assert.strictEqual(result, 0);
    result = abs(['']);
    assert.strictEqual(result, 0);
    result = abs([[]]);
    assert.strictEqual(result, 0);
  });

  test('absolute value of empty object literal equals `NaN`', function (assert) {
    const result = abs([{}]);
    assert.ok(isNaN(result));
  });
});
