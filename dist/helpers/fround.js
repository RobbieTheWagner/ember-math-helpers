
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.fround` on the number passed to the helper.
 *
 * ```hbs
 * {{fround a}}
 * ```
 *
 * @function fround
 * @param {number} number The number to pass to `Math.fround`
 * @return {number} The fround of the passed number
 */
function fround([number]) {
  return Math.fround(number);
}
var fround$1 = helper(fround);

export { fround$1 as default, fround };
//# sourceMappingURL=fround.js.map
