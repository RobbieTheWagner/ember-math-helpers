import { min } from 'dummy/helpers/min';
import { module, test } from 'qunit';

module('Unit | Helper | min', function () {
  test('min works', function (assert) {
    assert.equal(
      min([3, 2, 3, 5, 6, 42, 3, 6, 7]),
      2,
      'accepts multiple arguments'
    );

    assert.equal(min([42]), 42, 'accepts one argument');

    assert.equal(min([]), Infinity, 'accepts zero arguments');
  });
});
