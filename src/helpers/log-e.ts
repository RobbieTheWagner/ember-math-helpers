import { helper } from '@ember/component/helper';

export interface LogESignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.log` on the number passed to the helper.
 *
 * ```hbs
 * {{log-e a}}
 * ```
 *
 * @function log-e
 * @param {number} number The number to pass to `Math.log`
 * @return {number} The log of the passed number
 */
export function logE([number]: [number]) {
  return Math.log(number);
}

export default helper<LogESignature>(logE);
