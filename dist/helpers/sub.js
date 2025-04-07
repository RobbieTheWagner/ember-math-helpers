
import { helper } from '@ember/component/helper';

/**
 * Subtracts two or more numbers
 *
 * ```hbs
 * {{sub a b}}
 * ```
 *
 * @function sub
 * @param {number[]} numbers A list of numbers to subtract
 * @return {number} The difference of all the passed numbers
 */
function sub(numbers) {
  return numbers.reduce((a, b) => Number(a) - Number(b));
}
var sub$1 = helper(sub);

export { sub$1 as default, sub };
//# sourceMappingURL=sub.js.map
