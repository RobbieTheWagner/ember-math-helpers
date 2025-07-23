import { helper } from '@ember/component/helper';

export interface MultSignature {
  Args: {
    Positional: Array<number>;
  };
  Return: number;
}

/**
 * Multiplies two or more numbers
 *
 * ```hbs
 * {{mult a b}}
 * ```
 *
 * @function mult
 * @param {number[]} numbers A list of numbers to multiply
 * @return {number} The product of all the passed numbers
 */
export function mult(numbers: Array<number>) {
  return numbers.reduce((a, b) => Number(a) * Number(b));
}

export default helper<MultSignature>(mult);
