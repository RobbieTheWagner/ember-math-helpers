import { helper } from '@ember/component/helper';

export interface MinSignature {
  Args: {
    Positional: Array<number>;
  };
  Return: number;
}

/**
 * Takes two or more numbers, and finds the min of the set using `Math.min`
 *
 * ```hbs
 * {{min a b}}
 * ```
 *
 * @function min
 * @param {number[]} numbers A list of numbers to pass to `Math.min`
 * @return {number} The min of the set of numbers
 */
export function min(numbers: Array<number>) {
  return Math.min(...numbers);
}

export default helper<MinSignature>(min);
