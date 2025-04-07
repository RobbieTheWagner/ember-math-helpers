
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.trunc` on the number passed to the helper.
 *
 * ```hbs
 * {{trunc a}}
 * ```
 *
 * @function trunc
 * @param {number} number The number to pass to `Math.trunc`
 * @return {number} The trunc of the passed number
 */
function trunc([number]) {
  return Math.trunc(number);
}
var trunc$1 = helper(trunc);

export { trunc$1 as default, trunc };
//# sourceMappingURL=trunc.js.map
