import { helper } from '@ember/component/helper';

export interface SubSignature {
  Args: {
    Positional: Array<number>;
  };
  Return: number;
}

/**
 * Subtracts two or more numbers
 *
 * ```hbs
 * {{sub a b}}
 * ```
 *
 * @param numbers A list of numbers to subtract
 * @return The difference of all the passed numbers
 */
export function sub(numbers: Array<number>) {
  return numbers.reduce((a, b) => Number(a) - Number(b));
}

export default helper<SubSignature>(sub);
