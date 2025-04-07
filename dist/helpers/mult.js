
import { helper } from '@ember/component/helper';

/**
 * Multiplies two or more numbers
 *
 * ```hbs
 * {{mult a b}}
 * ```
 *
 * @function mult
 * @param {number[]} numbers A list of numbers to multiply
 * @return {number} The product of all the passed numbers
 */
function mult(numbers) {
  return numbers.reduce((a, b) => Number(a) * Number(b));
}
var mult$1 = helper(mult);

export { mult$1 as default, mult };
//# sourceMappingURL=mult.js.map
