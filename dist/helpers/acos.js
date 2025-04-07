
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.acos` on the number passed to the helper.
 *
 * ```hbs
 * {{acos a}}
 * ```
 *
 * @function acos
 * @param {number} number The number to pass to `Math.acos`
 * @return {number} The acos of the passed number
 */
function acos([number]) {
  return Math.acos(number);
}
var acos$1 = helper(acos);

export { acos, acos$1 as default };
//# sourceMappingURL=acos.js.map
