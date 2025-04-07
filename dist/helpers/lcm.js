
import { helper } from '@ember/component/helper';
import { gcd } from './gcd.js';

/**
 * Returns the smallest positive integer that is divisible by both number1 and number2
 *
 * ```hbs
 * {{lcm a b}}
 * ```
 *
 * @function lcm
 * @param {number} number1 The first number
 * @param {number} number2 The second number
 * @return {number} The LCM of the two numbers passed
 */
function lcm([number1 = 0, number2 = 0]) {
  return number1 === 0 || number2 === 0 ? 0 : Math.abs(number1 * number2) / gcd([number1, number2]);
}
var lcm$1 = helper(lcm);

export { lcm$1 as default, lcm };
//# sourceMappingURL=lcm.js.map
