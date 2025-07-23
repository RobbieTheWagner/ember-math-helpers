import { sign } from '#src/helpers/sign';
import { module, test } from 'qunit';

module('Unit | Helper | sign', function () {
  test('it works', function (assert) {
    assert.strictEqual(sign([-5]), -1, 'Negative returns -1');

    assert.strictEqual(sign([5]), 1, 'Positive returns 1');

    assert.strictEqual(String(sign(['foo'])), 'NaN', 'Invalid returns NaN');
  });
});
