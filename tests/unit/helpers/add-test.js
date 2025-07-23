import { add } from '#src/helpers/add';
import { module, test } from 'qunit';

module('Unit | Helper | add', function () {
  test('addition works', function (assert) {
    const result = add([20, 10]);
    assert.strictEqual(result, 30);
  });

  test('addition of multiple arguments works', function (assert) {
    const result = add([1, 2, 3, 4, 5]);
    assert.strictEqual(result, 15);
  });
});
