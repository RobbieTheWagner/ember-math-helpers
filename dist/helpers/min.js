
import { helper } from '@ember/component/helper';

/**
 * Takes two or more numbers, and finds the min of the set using `Math.min`
 *
 * ```hbs
 * {{min a b}}
 * ```
 *
 * @function min
 * @param {number[]} numbers A list of numbers to pass to `Math.min`
 * @return {number} The min of the set of numbers
 */
function min(numbers) {
  return Math.min(...numbers);
}
var min$1 = helper(min);

export { min$1 as default, min };
//# sourceMappingURL=min.js.map
