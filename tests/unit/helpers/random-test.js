import { random } from '#src/helpers/random';
import range from '../../helpers/range';
import { module, test } from 'qunit';

const { floor } = Math;
const SAMPLE_SIZE = 100;
const PRECISION = 6;

// 💡 Because precise decimals aren't zero-padded, we can
// tolerate some percentage of failures when dealing with decimal length
const TOLERANCE = 0.25; // 75% pass-rate

let randVal, satisfied, passCount, message;

module('Unit | Helper | random', function () {
  function isPassing(passCount, sampleSize, toleranceRatio) {
    return passCount >= floor(sampleSize * (1 - toleranceRatio));
  }

  function numDecimals(floatingPointNum) {
    return floatingPointNum.toPrecision().split('.')[1].length;
  }

  test('no positional arguments', function (assert) {
    message = 'defaults to returning the whole numbers of either 0 or 1';

    passCount = range(1, SAMPLE_SIZE).reduce((acc) => {
      randVal = random();
      satisfied = randVal === 0 || randVal === 1;

      return satisfied ? acc + 1 : acc;
    }, 0);

    assert.ok(isPassing(passCount, SAMPLE_SIZE, TOLERANCE), message);

    message =
      'returns a number between 0 and 1, with decimal precision specified by `decimals`';

    passCount = range(1, SAMPLE_SIZE).reduce((acc) => {
      randVal = random({ decimals: PRECISION });

      satisfied =
        randVal > 0 && randVal < 1 && numDecimals(randVal) <= PRECISION;

      return satisfied ? acc + 1 : acc;
    }, 0);

    assert.ok(isPassing(passCount, SAMPLE_SIZE, TOLERANCE), message);
  });

  test('one positional argument', function (assert) {
    message = 'returns a random whole number between 0 and 42, inclusive';

    passCount = range(1, SAMPLE_SIZE).reduce((acc) => {
      randVal = random([42]);

      satisfied = randVal >= 0 && randVal <= 42;

      return satisfied ? acc + 1 : acc;
    }, 0);

    assert.ok(isPassing(passCount, SAMPLE_SIZE, TOLERANCE), message);

    message =
      'returns a random number between 0 and a single positional arg, with decimal precision specified by `decimals`';
    passCount = range(1, SAMPLE_SIZE).reduce((acc) => {
      randVal = random([42], { decimals: PRECISION });

      satisfied =
        randVal > 0 && randVal < 42 && numDecimals(randVal) <= PRECISION;

      return satisfied ? acc + 1 : acc;
    }, 0);

    assert.ok(isPassing(passCount, SAMPLE_SIZE, TOLERANCE), message);
  });

  test('two positional arguments', function (assert) {
    message =
      'returns a random whole number between two upper and lower bound postional args, inclusive';
    passCount = range(1, SAMPLE_SIZE).reduce((acc) => {
      randVal = random([1797, 21]);

      satisfied = randVal >= 21 && randVal <= 1797;

      return satisfied ? acc + 1 : acc;
    }, 0);

    assert.ok(isPassing(passCount, SAMPLE_SIZE, TOLERANCE), message);

    message =
      'returns a random number between two upper and lower bound postional args, with decimal precision specified by `decimals`';
    passCount = range(1, SAMPLE_SIZE).reduce((acc) => {
      randVal = random([21, 1797], { decimals: PRECISION });

      satisfied =
        randVal >= 21 && randVal <= 1797 && numDecimals(randVal) <= PRECISION;

      return satisfied ? acc + 1 : acc;
    }, 0);

    assert.ok(isPassing(passCount, SAMPLE_SIZE, TOLERANCE), message);
  });

  test('bounding `decimals` between 0 and 20', function (assert) {
    randVal = random([42], { decimals: 100 });

    satisfied = randVal > 0 && randVal < 42 && numDecimals(randVal) <= 20;

    assert.ok(satisfied);
  });
});
