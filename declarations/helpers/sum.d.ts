import { type AddSignature } from './add.ts';
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
export declare function sum(numbers: Array<number>): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<AddSignature>;
export default _default;
