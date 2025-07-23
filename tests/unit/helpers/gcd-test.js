import { gcd } from '#src/helpers/gcd';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Helper | gcd', function (hooks) {
  setupTest(hooks);

  module('Two integers', function () {
    test('computing gcd for a larger and smaller integer', function (assert) {
      assert.strictEqual(gcd([100, 48]), 4);
      assert.strictEqual(gcd([100, 0]), 100);
    });

    test('computing gcd for a smaller and larger integer', function (assert) {
      assert.strictEqual(gcd([48, 100]), 4);
      assert.strictEqual(gcd([48, 0]), 48);
    });

    test('computing gcd for the absolute value of two integers ', function (assert) {
      assert.strictEqual(gcd([-100, 48]), 4);
      assert.strictEqual(gcd([-100, -48]), 4);
      assert.strictEqual(gcd([100, -48]), 4);
      assert.strictEqual(gcd([0, -48]), 48);
    });
  });

  module('Edge-case inputs', function () {
    test('returning 0 by default', function (assert) {
      const result = gcd([]);

      assert.strictEqual(result, 0);
    });

    test('reflecting back single-integer inputs', function (assert) {
      const result = gcd([48]);

      assert.strictEqual(result, 48);
    });

    test('handling numeric strings', function (assert) {
      const result = gcd(['2', '4']);

      assert.strictEqual(result, 2);
    });
  });
});
