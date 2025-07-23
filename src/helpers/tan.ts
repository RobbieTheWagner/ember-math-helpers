import { helper } from '@ember/component/helper';

export interface TanSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

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
export function tan([number]: [number]) {
  return Math.tan(number);
}

export default helper<TanSignature>(tan);
