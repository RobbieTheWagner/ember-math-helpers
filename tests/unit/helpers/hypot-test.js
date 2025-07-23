import { hypot } from '#src/helpers/hypot';
import { module, test } from 'qunit';

module('Unit | Helper | hypot', function () {
  test('hypot works', function (assert) {
    const result = hypot([3, 4, 5]);
    assert.strictEqual(result, 7.0710678118654755);
  });
});
