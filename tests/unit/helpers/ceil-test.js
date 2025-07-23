import { ceil } from '#src/helpers/ceil';
import { module, test } from 'qunit';

module('Unit | Helper | ceil', function () {
  test('it works', function (assert) {
    let result = ceil([1]);
    assert.strictEqual(result, 1);

    result = ceil([1.01]);
    assert.strictEqual(result, 2);

    result = ceil([1.5]);
    assert.strictEqual(result, 2);

    result = ceil([1.99]);
    assert.strictEqual(result, 2);

    result = ceil([2]);
    assert.strictEqual(result, 2);
  });
});
