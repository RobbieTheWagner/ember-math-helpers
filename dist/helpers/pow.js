
import { helper } from '@ember/component/helper';

/**
 * Takes two or more numbers, using the first as the base number,
 * then using each subsequent number as an exponent to the previous value
 *
 * ```hbs
 * {{pow a b}}
 * ```
 *
 * @function pow
 * @param {number[]} numbers A list of numbers to pass to `Math.pow`
 * @return {number} The base raised to all exponents
 */
function pow(numbers) {
  return numbers.reduce((base, exponent) => Math.pow(base, exponent));
}
var pow$1 = helper(pow);

export { pow$1 as default, pow };
//# sourceMappingURL=pow.js.map
