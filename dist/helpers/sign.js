
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.sign` on the number passed to the helper.
 *
 * ```hbs
 * {{sign a}}
 * ```
 *
 * @function sign
 * @param {number} number The number to pass to `Math.sign`
 * @return {number} The sign of the passed number
 */
function sign([number]) {
  return Math.sign(number);
}
var sign$1 = helper(sign);

export { sign$1 as default, sign };
//# sourceMappingURL=sign.js.map
