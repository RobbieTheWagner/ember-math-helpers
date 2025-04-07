
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.tan` on the number passed to the helper.
 *
 * ```hbs
 * {{tan a}}
 * ```
 *
 * @function tan
 * @param {number} number The number to pass to `Math.tan`
 * @return {number} The tan of the passed number
 */
function tan([number]) {
  return Math.tan(number);
}
var tan$1 = helper(tan);

export { tan$1 as default, tan };
//# sourceMappingURL=tan.js.map
