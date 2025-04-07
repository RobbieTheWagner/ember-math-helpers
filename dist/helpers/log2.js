
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.log2` on the number passed to the helper.
 *
 * ```hbs
 * {{log2 a}}
 * ```
 *
 * @function log2
 * @param {number} number The number to pass to `Math.log2`
 * @return {number} The log2 of the passed number
 */
function log2([number]) {
  return Math.log2(number);
}
var log2$1 = helper(log2);

export { log2$1 as default, log2 };
//# sourceMappingURL=log2.js.map
