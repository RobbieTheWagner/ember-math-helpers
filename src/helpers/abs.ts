import { helper } from '@ember/component/helper';

export interface AbsSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Uses `Math.abs` to take the absolute value of the number passed to the helper.
 *
 * ```hbs
 * {{abs a}}
 * ```
 *
 * @function abs
 * @param {number} number The number to take the absolute value of
 * @return {number} The absolute value of the passed number
 */
export function abs([number]: [number]) {
  return Math.abs(number);
}

export default helper<AbsSignature>(abs);
