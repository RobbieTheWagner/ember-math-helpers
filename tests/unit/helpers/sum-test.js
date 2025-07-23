import { sum } from '#src/helpers/sum';
import { add } from '#src/helpers/add';
import { module, test } from 'qunit';

module('Unit | Helper | sum', function () {
  test('works as alias to add', function (assert) {
    const input = [20, 10];
    assert.strictEqual(sum(input), add(input));
  });

  test('works as alias to add for multiple arguments', function (assert) {
    const input = [1, 2, 3, 4, 5];
    assert.strictEqual(sum(input), add(input));
  });
});
