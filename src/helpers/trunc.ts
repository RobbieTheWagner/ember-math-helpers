import { helper } from '@ember/component/helper';

export interface TruncSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.trunc` on the number passed to the helper.
 *
 * ```hbs
 * {{trunc a}}
 * ```
 *
 * @function trunc
 * @param {number} number The number to pass to `Math.trunc`
 * @return {number} The trunc of the passed number
 */
export function trunc([number]: [number]) {
  return Math.trunc(number);
}

export default helper<TruncSignature>(trunc);
