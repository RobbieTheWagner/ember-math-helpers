import { helper } from '@ember/component/helper';

export interface DivSignature {
  Args: {
    Positional: Array<number>;
  };
  Return: number;
}

/**
 * Divides two or more numbers
 *
 * ```hbs
 * {{div a b}}
 * ```
 *
 * @param numbers A list of numbers to divide
 * @return The result of dividing all the passed numbers
 */
export function div(numbers: Array<number>) {
  return numbers.reduce((a, b) => Number(a) / Number(b));
}

export default helper<DivSignature>(div);
