import { helper } from '@ember/component/helper';

export interface CoshSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.cosh` on the number passed to the helper.
 *
 * ```hbs
 * {{cosh a}}
 * ```
 *
 * @param number The number to pass to `Math.cosh`
 * @return The cosh of the passed number
 */
export function cosh([number]: [number]) {
  return Math.cosh(number);
}

export default helper<CoshSignature>(cosh);
