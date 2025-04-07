
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.sqrt` on the number passed to the helper.
 *
 * ```hbs
 * {{sqrt a}}
 * ```
 *
 * @function sqrt
 * @param {number} number The number to pass to `Math.sqrt`
 * @return {number} The sqrt of the passed number
 */
function sqrt([number]) {
  return Math.sqrt(number);
}
var sqrt$1 = helper(sqrt);

export { sqrt$1 as default, sqrt };
//# sourceMappingURL=sqrt.js.map
