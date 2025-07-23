import { helper } from '@ember/component/helper';

export interface MaxSignature {
  Args: {
    Positional: Array<number>;
  };
  Return: number;
}

/**
 * Takes two or more numbers, and finds the max of the set using `Math.max`
 *
 * ```hbs
 * {{max a b}}
 * ```
 *
 * @function max
 * @param {number[]} numbers A list of numbers to pass to `Math.max`
 * @return {number} The max of the set of numbers
 */
export function max(numbers: Array<number>) {
  return Math.max(...numbers);
}

export default helper<MaxSignature>(max);
