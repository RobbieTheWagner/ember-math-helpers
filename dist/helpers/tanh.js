
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.tanh` on the number passed to the helper.
 *
 * ```hbs
 * {{tanh a}}
 * ```
 *
 * @function tanh
 * @param {number} number The number to pass to `Math.tanh`
 * @return {number} The tanh of the passed number
 */
function tanh([number]) {
  return Math.tanh(number);
}
var tanh$1 = helper(tanh);

export { tanh$1 as default, tanh };
//# sourceMappingURL=tanh.js.map
