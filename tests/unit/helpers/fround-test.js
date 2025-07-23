import { fround } from '#src/helpers/fround';
import { module, test } from 'qunit';

module('Unit | Helper | fround', function () {
  test('fround works', function (assert) {
    const result = fround([1.337]);
    assert.strictEqual(result, 1.3370000123977661);
  });
});
