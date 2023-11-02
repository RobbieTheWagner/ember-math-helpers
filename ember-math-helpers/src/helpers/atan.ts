import { helper } from '@ember/component/helper';

export interface AtanSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.atan` on the number passed to the helper.
 *
 * ```hbs
 * {{atan a}}
 * ```
 *
 * @param number The number to pass to `Math.atan`
 * @return The atan of the passed number
 */
export function atan([number]: [number]) {
  return Math.atan(number);
}

export default helper<AtanSignature>(atan);
