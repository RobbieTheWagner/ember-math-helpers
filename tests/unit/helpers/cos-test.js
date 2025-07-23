import { cos } from '#src/helpers/cos';
import { module, test } from 'qunit';

module('Unit | Helper | cos', function () {
  test('cos works', function (assert) {
    const result = cos([0]);
    assert.strictEqual(result, 1);
  });
});
