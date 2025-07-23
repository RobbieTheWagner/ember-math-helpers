import { helper } from '@ember/component/helper';

export interface HypotSignature {
  Args: {
    Positional: Array<number>;
  };
  Return: number;
}

/**
 * Takes two or more numbers, and returns the square root of the sum of squares of them using `Math.hypot`
 *
 * ```hbs
 * {{max a b}}
 * ```
 *
 * @function hypot
 * @param {number[]} numbers A list of numbers to pass to `Math.hypot`
 * @return {number} The hypot of the set of numbers
 */
export function hypot(numbers: Array<number>) {
  return Math.hypot(...numbers);
}

export default helper<HypotSignature>(hypot);
