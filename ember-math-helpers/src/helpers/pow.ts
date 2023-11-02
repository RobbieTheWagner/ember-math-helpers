import { helper } from '@ember/component/helper';

export interface PowSignature {
  Args: {
    Positional: Array<number>;
  };
  Return: number;
}

/**
 * Takes two or more numbers, using the first as the base number,
 * then using each subsequent number as an exponent to the previous value
 *
 * ```hbs
 * {{pow a b}}
 * ```
 *
 * @param numbers A list of numbers to pass to `Math.pow`
 * @return The base raised to all exponents
 */
export function pow(numbers: Array<number>) {
  return numbers.reduce((base, exponent) => Math.pow(base, exponent));
}

export default helper<PowSignature>(pow);
