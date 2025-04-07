
import { helper } from '@ember/component/helper';

/**
 * Uses `Math.abs` to take the absolute value of the number passed to the helper.
 *
 * ```hbs
 * {{abs a}}
 * ```
 *
 * @function abs
 * @param {number} number The number to take the absolute value of
 * @return {number} The absolute value of the passed number
 */
function abs([number]) {
  return Math.abs(number);
}
var abs$1 = helper(abs);

export { abs, abs$1 as default };
//# sourceMappingURL=abs.js.map
