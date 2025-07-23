import { imul } from '#src/helpers/imul';
import { module, test } from 'qunit';

module('Unit | Helper | imul', function () {
  test('imul works', function (assert) {
    const result = imul([0xfffffffe, 5]);
    assert.strictEqual(result, -10);
  });
});
