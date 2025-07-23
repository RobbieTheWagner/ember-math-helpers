import { round } from '#src/helpers/round';
import { module, test } from 'qunit';

module('Unit | Helper | round', function () {
  // Replace this with your real tests.
  test('it works', function (assert) {
    assert.strictEqual(
      round([20.49]),
      20,
      'It rounds values with a decimal place less than .5 down',
    );

    assert.strictEqual(
      round([20.5]),
      21,
      'It rounds values with a decimal place greater than or equal to .5 up',
    );

    assert.strictEqual(
      round([-20.5]),
      -20,
      'It rounds negative numbers up appropriately',
    );

    assert.strictEqual(
      round([-20.51]),
      -21,
      'It rounds negative numbers down appropriately',
    );

    assert.strictEqual(
      round([42]),
      42,
      'When given a whole number, the result stays the same',
    );

    assert.strictEqual(
      round([35.855], { decimals: 2 }),
      35.86,
      'It rounds to a given number of decimal places',
    );

    assert.strictEqual(
      round([123456], { exp: 3 }),
      123000,
      'It rounds to a given power of ten',
    );
  });
});
