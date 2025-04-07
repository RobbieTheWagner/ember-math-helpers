
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.floor` on the number passed to the helper.
 *
 * ```hbs
 * {{floor a}}
 * ```
 *
 * @function floor
 * @param {number} number The number to pass to `Math.floor`
 * @return {number} The floor of the passed number
 */
function floor([number]) {
  return Math.floor(number);
}
var floor$1 = helper(floor);

export { floor$1 as default, floor };
//# sourceMappingURL=floor.js.map
