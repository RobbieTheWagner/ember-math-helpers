import { max } from '#src/helpers/max';
import { module, test } from 'qunit';

module('Unit | Helper | max', function () {
  test('max works', function (assert) {
    assert.strictEqual(
      max([1, 2, 3, 5, 6, 42, 3, 6, 7]),
      42,
      'accepts multiple arguments',
    );

    assert.strictEqual(max([42]), 42, 'accepts one argument');

    assert.strictEqual(
      max([]),
      Number.NEGATIVE_INFINITY,
      'accepts zero arguments',
    );
  });
});
