
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.atanh` on the number passed to the helper.
 *
 * ```hbs
 * {{atanh a}}
 * ```
 *
 * @function atanh
 * @param {number} number The number to pass to `Math.atanh`
 * @return {number} The atanh of the passed number
 */
function atanh([number]) {
  return Math.atanh(number);
}
var atanh$1 = helper(atanh);

export { atanh, atanh$1 as default };
//# sourceMappingURL=atanh.js.map
