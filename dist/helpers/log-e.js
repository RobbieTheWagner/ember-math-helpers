
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.log` on the number passed to the helper.
 *
 * ```hbs
 * {{log-e a}}
 * ```
 *
 * @function log-e
 * @param {number} number The number to pass to `Math.log`
 * @return {number} The log of the passed number
 */
function logE([number]) {
  return Math.log(number);
}
var logE$1 = helper(logE);

export { logE$1 as default, logE };
//# sourceMappingURL=log-e.js.map
