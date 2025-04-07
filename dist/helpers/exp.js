
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.exp` on the number passed to the helper.
 *
 * ```hbs
 * {{exp a}}
 * ```
 *
 * @function exp
 * @param {number} number The number to pass to `Math.exp`
 * @return {number} The exp of the passed number
 */
function exp([number]) {
  return Math.exp(number);
}
var exp$1 = helper(exp);

export { exp$1 as default, exp };
//# sourceMappingURL=exp.js.map
