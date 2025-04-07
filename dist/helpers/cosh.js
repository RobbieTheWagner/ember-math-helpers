
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.cosh` on the number passed to the helper.
 *
 * ```hbs
 * {{cosh a}}
 * ```
 *
 * @function cosh
 * @param {number} number The number to pass to `Math.cosh`
 * @return {number} The cosh of the passed number
 */
function cosh([number]) {
  return Math.cosh(number);
}
var cosh$1 = helper(cosh);

export { cosh, cosh$1 as default };
//# sourceMappingURL=cosh.js.map
