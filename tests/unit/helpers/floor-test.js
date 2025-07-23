import { floor } from '#src/helpers/floor';
import { module, test } from 'qunit';

module('Unit | Helper | floor', function () {
  test('it works', function (assert) {
    let result = floor([1]);
    assert.strictEqual(result, 1);

    result = floor([1.01]);
    assert.strictEqual(result, 1);

    result = floor([1.5]);
    assert.strictEqual(result, 1);

    result = floor([1.99]);
    assert.strictEqual(result, 1);

    result = floor([2]);
    assert.strictEqual(result, 2);
  });
});
