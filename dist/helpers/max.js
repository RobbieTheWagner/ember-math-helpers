
import { helper } from '@ember/component/helper';

/**
 * Takes two or more numbers, and finds the max of the set using `Math.max`
 *
 * ```hbs
 * {{max a b}}
 * ```
 *
 * @function max
 * @param {number[]} numbers A list of numbers to pass to `Math.max`
 * @return {number} The max of the set of numbers
 */
function max(numbers) {
  return Math.max(...numbers);
}
var max$1 = helper(max);

export { max$1 as default, max };
//# sourceMappingURL=max.js.map
