import { min } from '#src/helpers/min';
import { module, test } from 'qunit';

module('Unit | Helper | min', function () {
  test('min works', function (assert) {
    assert.strictEqual(
      min([3, 2, 3, 5, 6, 42, 3, 6, 7]),
      2,
      'accepts multiple arguments',
    );

    assert.strictEqual(min([42]), 42, 'accepts one argument');

    assert.strictEqual(min([]), Infinity, 'accepts zero arguments');
  });
});
