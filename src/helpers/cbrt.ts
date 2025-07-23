import { helper } from '@ember/component/helper';

export interface CbrtSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.cbrt` on the number passed to the helper.
 *
 * ```hbs
 * {{cbrt a}}
 * ```
 *
 * @function cbrt
 * @param {number} number The number to pass to `Math.cbrt`
 * @return {number} The cbrt of the passed number
 */
export function cbrt([number]: [number]) {
  return Math.cbrt(number);
}

export default helper<CbrtSignature>(cbrt);
