import { helper } from '@ember/component/helper';

export interface CeilSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.ceil` on the number passed to the helper.
 *
 * ```hbs
 * {{ceil a}}
 * ```
 *
 * @param number The number to pass to `Math.ceil`
 * @return The ceil of the passed number
 */
export function ceil([number]: [number]) {
  return Math.ceil(number);
}

export default helper<CeilSignature>(ceil);
