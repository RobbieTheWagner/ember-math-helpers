
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.sin` on the number passed to the helper.
 *
 * ```hbs
 * {{sin a}}
 * ```
 *
 * @function sin
 * @param {number} number The number to pass to `Math.sin`
 * @return {number} The sin of the passed number
 */
function sin([number]) {
  return Math.sin(number);
}
var sin$1 = helper(sin);

export { sin$1 as default, sin };
//# sourceMappingURL=sin.js.map
