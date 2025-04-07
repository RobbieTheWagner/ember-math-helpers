export interface AddSignature {
    Args: {
        Positional: Array<number>;
    };
    Return: number;
}
/**
 * Sums two or more numbers
 *
 * ```hbs
 * {{add a b}}
 * ```
 *
 * @function add
 * @param {number[]} numbers A list of numbers to sum
 * @return {number} The sum of all the passed numbers
 */
export declare function add(numbers: Array<number>): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<AddSignature>;
export default _default;
