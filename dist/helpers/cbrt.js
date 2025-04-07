
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.cbrt` on the number passed to the helper.
 *
 * ```hbs
 * {{cbrt a}}
 * ```
 *
 * @function cbrt
 * @param {number} number The number to pass to `Math.cbrt`
 * @return {number} The cbrt of the passed number
 */
function cbrt([number]) {
  return Math.cbrt(number);
}
var cbrt$1 = helper(cbrt);

export { cbrt, cbrt$1 as default };
//# sourceMappingURL=cbrt.js.map
