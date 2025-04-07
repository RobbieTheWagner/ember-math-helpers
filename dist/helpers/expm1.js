
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.expm1` on the number passed to the helper.
 *
 * ```hbs
 * {{expm1 a}}
 * ```
 *
 * @function expm1
 * @param {number} number The number to pass to `Math.expm1`
 * @return {number} The expm1 of the passed number
 */
function expm1([number]) {
  return Math.expm1(number);
}
var expm1$1 = helper(expm1);

export { expm1$1 as default, expm1 };
//# sourceMappingURL=expm1.js.map
