
import { helper } from '@ember/component/helper';

// adapted from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round#Decimal_rounding
/**
 * Decimal adjustment of a number.
 *
 * @private
 * @param value The number.
 * @param exp The exponent (the 10 logarithm of the adjustment base).
 * @return {number} The adjusted value.
 */
function decimalAdjust(value, exp) {
  // If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math.round(value);
  }
  value = +value;
  exp = +exp;

  // If the value is not a number or the exp is not an integer...
  if (value === null || isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }

  // If the value is negative...
  if (value < 0) {
    return -decimalAdjust(-value, exp);
  }

  // Shift
  let splitValue = value.toString().split('e');
  value = Math.round(+`${splitValue[0]}e${splitValue[1] ? +splitValue[1] - exp : -exp}`);
  // Shift back
  splitValue = value.toString().split('e');
  return +`${splitValue[0]}e${splitValue[1] ? +splitValue[1] + exp : exp}`;
}

/**
 * Executes `Math.round` on the number passed to the helper.
 *
 * ```hbs
 * {{round a}}
 * ```
 *
 * You can provide optional named arguments for `decimals` and `exp` that will adjust
 * the number of decimals used for rounding and the exponent (the 10 logarithm of the adjustment base) accordingly.
 *
 * For example:
 *
 * ```hbs
 * {{round a decimals=2}}
 * ```
 *
 * @function round
 * @param {number} number The number to pass to `Math.round`
 * @param {object} named The set of named arguments, currently `decimals` and `exp`.
 * @param {number} [named.decimals] An optional param to specify the number of decimals to round to.
 * @param {number} [named.exp] An optional param to specify the exponent (the 10 logarithm of the adjustment base).
 * @return {number} The number rounded based on the number of decimals specified.
 */
function round([number], namedArgs) {
  if (namedArgs) {
    if (namedArgs.decimals) {
      return decimalAdjust(number, -namedArgs.decimals);
    }
    if (namedArgs.exp) {
      return decimalAdjust(number, namedArgs.exp);
    }
  }
  return Math.round(number);
}
var round$1 = helper(round);

export { round$1 as default, round };
//# sourceMappingURL=round.js.map
