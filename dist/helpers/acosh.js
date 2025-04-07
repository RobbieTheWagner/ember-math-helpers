
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.acosh` on the number passed to the helper.
 *
 * ```hbs
 * {{acosh a}}
 * ```
 *
 * @function acosh
 * @param {number} number The number to pass to `Math.acosh`
 * @return {number} The acosh of the passed number
 */
function acosh([number]) {
  return Math.acosh(number);
}
var acosh$1 = helper(acosh);

export { acosh, acosh$1 as default };
//# sourceMappingURL=acosh.js.map
