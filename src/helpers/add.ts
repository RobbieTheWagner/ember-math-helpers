import { helper } from '@ember/component/helper';

export interface AddSignature {
  Args: {
    Positional: Array<number>;
  };
  Return: number;
}

/**
 * Sums two or more numbers
 *
 * ```hbs
 * {{add a b}}
 * ```
 *
 * @function add
 * @param {number[]} numbers A list of numbers to sum
 * @return {number} The sum of all the passed numbers
 */
export function add(numbers: Array<number>) {
  return numbers.reduce((a, b) => Number(a) + Number(b));
}

export default helper<AddSignature>(add);
