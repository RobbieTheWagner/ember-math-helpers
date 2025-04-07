
import { helper } from '@ember/component/helper';

/**
 * Sums two or more numbers
 *
 * ```hbs
 * {{add a b}}
 * ```
 *
 * @function add
 * @param {number[]} numbers A list of numbers to sum
 * @return {number} The sum of all the passed numbers
 */
function add(numbers) {
  return numbers.reduce((a, b) => Number(a) + Number(b));
}
var add$1 = helper(add);

export { add, add$1 as default };
//# sourceMappingURL=add.js.map
