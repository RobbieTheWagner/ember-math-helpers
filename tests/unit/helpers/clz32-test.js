import { clz32 } from '#src/helpers/clz32';
import { module, test } from 'qunit';

module('Unit | Helper | clz32', function () {
  test('clz32 works', function (assert) {
    const result = clz32([1000]);
    assert.strictEqual(result, 22);
  });
});
