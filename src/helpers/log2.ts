import { helper } from '@ember/component/helper';

export interface Log2Signature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.log2` on the number passed to the helper.
 *
 * ```hbs
 * {{log2 a}}
 * ```
 *
 * @function log2
 * @param {number} number The number to pass to `Math.log2`
 * @return {number} The log2 of the passed number
 */
export function log2([number]: [number]) {
  return Math.log2(number);
}

export default helper<Log2Signature>(log2);
