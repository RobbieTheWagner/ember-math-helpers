import { helper } from '@ember/component/helper';

export interface CosSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.cos` on the number passed to the helper.
 *
 * ```hbs
 * {{cos a}}
 * ```
 *
 * @function cos
 * @param {number} number The number to pass to `Math.cos`
 * @return {number} The cos of the passed number
 */
export function cos([number]: [number]) {
  return Math.cos(number);
}

export default helper<CosSignature>(cos);
