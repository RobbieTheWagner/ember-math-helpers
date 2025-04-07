
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.ceil` on the number passed to the helper.
 *
 * ```hbs
 * {{ceil a}}
 * ```
 *
 * @function ceil
 * @param {number} number The number to pass to `Math.ceil`
 * @return {number} The ceil of the passed number
 */
function ceil([number]) {
  return Math.ceil(number);
}
var ceil$1 = helper(ceil);

export { ceil, ceil$1 as default };
//# sourceMappingURL=ceil.js.map
