
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.asinh` on the number passed to the helper.
 *
 * ```hbs
 * {{asinh a}}
 * ```
 *
 * @function asinh
 * @param {number} number The number to pass to `Math.asinh`
 * @return {number} The asinh of the passed number
 */
function asinh([number]) {
  return Math.asinh(number);
}
var asinh$1 = helper(asinh);

export { asinh, asinh$1 as default };
//# sourceMappingURL=asinh.js.map
