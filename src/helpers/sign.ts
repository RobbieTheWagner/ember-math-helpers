import { helper } from '@ember/component/helper';

export interface SignSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.sign` on the number passed to the helper.
 *
 * ```hbs
 * {{sign a}}
 * ```
 *
 * @function sign
 * @param {number} number The number to pass to `Math.sign`
 * @return {number} The sign of the passed number
 */
export function sign([number]: [number]) {
  return Math.sign(number);
}

export default helper<SignSignature>(sign);
