import { log2 } from '#src/helpers/log2';
import { module, test } from 'qunit';

module('Unit | Helper | log2', function () {
  test('log2 works', function (assert) {
    const result = log2([2]);
    assert.strictEqual(result, 1);
  });
});
