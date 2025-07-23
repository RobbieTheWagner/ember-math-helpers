import { log10 } from '#src/helpers/log10';
import { module, test } from 'qunit';

module('Unit | Helper | log10', function () {
  test('log10 works', function (assert) {
    const result = log10([2]);
    assert.strictEqual(Number(result.toFixed(3)), 0.301);
  });
});
