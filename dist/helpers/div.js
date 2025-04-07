
import { helper } from '@ember/component/helper';

/**
 * Divides two or more numbers
 *
 * ```hbs
 * {{div a b}}
 * ```
 *
 * @function div
 * @param {number[]} numbers A list of numbers to divide
 * @return {number} The result of dividing all the passed numbers
 */
function div(numbers) {
  return numbers.reduce((a, b) => Number(a) / Number(b));
}
var div$1 = helper(div);

export { div$1 as default, div };
//# sourceMappingURL=div.js.map
