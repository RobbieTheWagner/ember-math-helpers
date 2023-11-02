import { helper } from '@ember/component/helper';

export interface AcosSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.acos` on the number passed to the helper.
 *
 * ```hbs
 * {{acos a}}
 * ```
 *
 * @param number The number to pass to `Math.acos`
 * @return The acos of the passed number
 */
export function acos([number]: [number]) {
  return Math.acos(number);
}

export default helper<AcosSignature>(acos);
