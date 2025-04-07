
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.log1p` on the number passed to the helper.
 *
 * ```hbs
 * {{log1p a}}
 * ```
 *
 * @function log1p
 * @param {number} number The number to pass to `Math.log1p`
 * @return {number} The log1p of the passed number
 */
function log1p([number]) {
  return Math.log1p(number);
}
var log1p$1 = helper(log1p);

export { log1p$1 as default, log1p };
//# sourceMappingURL=log1p.js.map
