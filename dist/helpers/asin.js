
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.asin` on the number passed to the helper.
 *
 * ```hbs
 * {{asin a}}
 * ```
 *
 * @function asin
 * @param {number} number The number to pass to `Math.asin`
 * @return {number} The asin of the passed number
 */
function asin([number]) {
  return Math.asin(number);
}
var asin$1 = helper(asin);

export { asin, asin$1 as default };
//# sourceMappingURL=asin.js.map
