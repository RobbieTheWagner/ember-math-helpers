
import { helper } from '@ember/component/helper';

/**
 * Takes the modulus of two or more numbers
 *
 * ```hbs
 * {{mod a b}}
 * ```
 *
 * @function mod
 * @param {number[]} numbers A list of numbers to modulus
 * @return {number} The modulus of all the passed numbers
 */
function mod(numbers) {
  return numbers.reduce((a, b) => Number(a) % Number(b));
}
var mod$1 = helper(mod);

export { mod$1 as default, mod };
//# sourceMappingURL=mod.js.map
