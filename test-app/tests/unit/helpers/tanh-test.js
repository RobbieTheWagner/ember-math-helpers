import { tanh } from 'dummy/helpers/tanh';
import { module, test } from 'qunit';

module('Unit | Helper | tanh', function () {
  test('tanh works', function (assert) {
    const result = tanh([1]);
    assert.strictEqual(Number(result.toFixed(3)), 0.762);
  });
});
