
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.clz32` on the number passed to the helper.
 *
 * ```hbs
 * {{clz32 a}}
 * ```
 *
 * @function clz32
 * @param {number} number The number to pass to `Math.clz32`
 * @return {number} The clz32 of the passed number
 */
function clz32([number]) {
  return Math.clz32(number);
}
var clz32$1 = helper(clz32);

export { clz32, clz32$1 as default };
//# sourceMappingURL=clz32.js.map
