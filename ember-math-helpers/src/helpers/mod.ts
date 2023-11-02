import { helper } from '@ember/component/helper';

export interface ModSignature {
  Args: {
    Positional: Array<number>;
  };
  Return: number;
}

/**
 * Takes the modulus of two or more numbers
 *
 * ```hbs
 * {{mod a b}}
 * ```
 *
 * @param numbers A list of numbers to modulus
 * @return The modulus of all the passed numbers
 */
export function mod(numbers: Array<number>) {
  return numbers.reduce((a, b) => Number(a) % Number(b));
}

export default helper<ModSignature>(mod);
