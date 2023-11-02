import { helper } from '@ember/component/helper';

export interface Atan2Signature {
  Args: {
    Positional: [number, number];
  };
  Return: number;
}

/**
 * Executes `Math.atan2` on the numbers passed to the helper.
 *
 * ```hbs
 * {{atan2 a b}}
 * ```
 *
 * @param number1 The first number to pass to `Math.atan2`
 * @param number2 The second number to pass to `Math.atan2`
 * @return The atan2 of the passed numbers
 */
export function atan2([number1, number2]: [number, number]) {
  return Math.atan2(number1, number2);
}

export default helper<Atan2Signature>(atan2);
