
import { helper } from '@ember/component/helper';
import { add } from './add.js';

/**
 * Alias for {{add}} helper
 *
 * ```hbs
 * {{sum a b}}
 * ```
 *
 * @function sum
 * @param {number[]} numbers A list of numbers to sum
 * @return {number} The sum of all the passed numbers
 */
function sum(numbers) {
  return add(numbers);
}
var sum$1 = helper(sum);

export { sum$1 as default, sum };
//# sourceMappingURL=sum.js.map
