
import { helper } from '@ember/component/helper';

/**
 * Takes two or more numbers, and returns the square root of the sum of squares of them using `Math.hypot`
 *
 * ```hbs
 * {{max a b}}
 * ```
 *
 * @function hypot
 * @param {number[]} numbers A list of numbers to pass to `Math.hypot`
 * @return {number} The hypot of the set of numbers
 */
function hypot(numbers) {
  return Math.hypot(...numbers);
}
var hypot$1 = helper(hypot);

export { hypot$1 as default, hypot };
//# sourceMappingURL=hypot.js.map
