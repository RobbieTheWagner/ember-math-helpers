import { sin } from 'ember-math-helpers/helpers/sin';
import { module, test } from 'qunit';

module('Unit | Helper | sin', function () {
  test('sin works', function (assert) {
    const result = sin([0]);
    assert.strictEqual(result, 0);
  });
});
