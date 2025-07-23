import { helper } from '@ember/component/helper';

export interface GcdSignature {
  Args: {
    Positional: [number, number];
  };
  Return: number;
}

/**
 * Returns the greatest positive integer that divides each of two integers
 *
 * ```hbs
 * {{gcd a b}}
 * ```
 *
 * @function gcd
 * @param {number} number1 The first number
 * @param {number} number2 The second number
 * @return {number} The GCD of the two numbers passed
 */
export function gcd([number1 = 0, number2 = 0]) {
  const a = Math.abs(number1);
  const b = Math.abs(number2);

  if (a === 0) {
    return b;
  }

  if (b === 0) {
    return a;
  }

  return gcd([b, a % b]);
}

export default helper<GcdSignature>(gcd);
