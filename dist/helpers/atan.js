
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.atan` on the number passed to the helper.
 *
 * ```hbs
 * {{atan a}}
 * ```
 * @function atan
 * @param {number} number The number to pass to `Math.atan`
 * @return {number} The atan of the passed number
 */
function atan([number]) {
  return Math.atan(number);
}
var atan$1 = helper(atan);

export { atan, atan$1 as default };
//# sourceMappingURL=atan.js.map
