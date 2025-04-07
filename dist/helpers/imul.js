
import { helper } from '@ember/component/helper';

/**
 * Executes `Math.imul` on the number passed to the helper.
 *
 * ```hbs
 * {{imul a}}
 * ```
 *
 * @function imul
 * @param {number} number1 The first number to pass to `Math.imul`
 * @param {number} number2 The second number to pass to `Math.imul`
 * @return {number} The imul of the passed numbers
 */
function imul([number1, number2]) {
  return Math.imul(number1, number2);
}
var imul$1 = helper(imul);

export { imul$1 as default, imul };
//# sourceMappingURL=imul.js.map
