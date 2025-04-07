
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.cos` on the number passed to the helper.
 *
 * ```hbs
 * {{cos a}}
 * ```
 *
 * @function cos
 * @param {number} number The number to pass to `Math.cos`
 * @return {number} The cos of the passed number
 */
function cos([number]) {
  return Math.cos(number);
}
var cos$1 = helper(cos);

export { cos, cos$1 as default };
//# sourceMappingURL=cos.js.map
