
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.log10` on the number passed to the helper.
 *
 * ```hbs
 * {{log10 a}}
 * ```
 *
 * @function log10
 * @param {number} number The number to pass to `Math.log10`
 * @return {number} The log10 of the passed number
 */
function log10([number]) {
  return Math.log10(number);
}
var log10$1 = helper(log10);

export { log10$1 as default, log10 };
//# sourceMappingURL=log10.js.map
