import { log1p } from '#src/helpers/log1p';
import { module, test } from 'qunit';

module('Unit | Helper | log1p', function () {
  test('log1p works', function (assert) {
    const result = log1p([0.5]);
    assert.strictEqual(Number(result.toFixed(3)), 0.405);
  });
});
