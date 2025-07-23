import { trunc } from '#src/helpers/trunc';
import { module, test } from 'qunit';

module('Unit | Helper | trunc', function () {
  test('trunc works', function (assert) {
    let result;
    result = trunc([13.37]);
    assert.strictEqual(result, 13);
    result = trunc([0.123]);
    assert.strictEqual(result, 0);
    result = trunc([-1.123]);
    assert.strictEqual(result, -1);
  });
});
