import { helper } from '@ember/component/helper';

export interface TanhSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.tanh` on the number passed to the helper.
 *
 * ```hbs
 * {{tanh a}}
 * ```
 *
 * @function tanh
 * @param {number} number The number to pass to `Math.tanh`
 * @return {number} The tanh of the passed number
 */
export function tanh([number]: [number]) {
  return Math.tanh(number);
}

export default helper<TanhSignature>(tanh);
