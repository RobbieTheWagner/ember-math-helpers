import { helper } from '@ember/component/helper';

import { add, type AddSignature } from './add.ts';

/**
 * Alias for {{add}} helper
 *
 * ```hbs
 * {{sum a b}}
 * ```
 *
 * @function sum
 * @param {number[]} numbers A list of numbers to sum
 * @return {number} The sum of all the passed numbers
 */
export function sum(numbers: Array<number>) {
  return add(numbers);
}

export default helper<AddSignature>(sum);
