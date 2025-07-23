import { helper } from '@ember/component/helper';

export interface Clz32Signature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.clz32` on the number passed to the helper.
 *
 * ```hbs
 * {{clz32 a}}
 * ```
 *
 * @function clz32
 * @param {number} number The number to pass to `Math.clz32`
 * @return {number} The clz32 of the passed number
 */
export function clz32([number]: [number]) {
  return Math.clz32(number);
}

export default helper<Clz32Signature>(clz32);
