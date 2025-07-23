import { helper } from '@ember/component/helper';

export interface FloorSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.floor` on the number passed to the helper.
 *
 * ```hbs
 * {{floor a}}
 * ```
 *
 * @function floor
 * @param {number} number The number to pass to `Math.floor`
 * @return {number} The floor of the passed number
 */
export function floor([number]: [number]) {
  return Math.floor(number);
}

export default helper<FloorSignature>(floor);
