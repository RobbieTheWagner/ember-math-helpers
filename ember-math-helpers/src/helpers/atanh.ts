import { helper } from '@ember/component/helper';

export interface AtanhSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.atanh` on the number passed to the helper.
 *
 * ```hbs
 * {{atanh a}}
 * ```
 *
 * @param number The number to pass to `Math.atanh`
 * @return The atanh of the passed number
 */
export function atanh([number]: [number]) {
  return Math.atanh(number);
}

export default helper<AtanhSignature>(atanh);
