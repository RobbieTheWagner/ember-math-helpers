import { helper } from '@ember/component/helper';

export interface AsinhSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.asinh` on the number passed to the helper.
 *
 * ```hbs
 * {{asinh a}}
 * ```
 *
 * @function asinh
 * @param {number} number The number to pass to `Math.asinh`
 * @return {number} The asinh of the passed number
 */
export function asinh([number]: [number]) {
  return Math.asinh(number);
}

export default helper<AsinhSignature>(asinh);
