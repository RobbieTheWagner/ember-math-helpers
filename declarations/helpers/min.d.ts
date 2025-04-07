export interface MinSignature {
    Args: {
        Positional: Array<number>;
    };
    Return: number;
}
/**
 * Takes two or more numbers, and finds the min of the set using `Math.min`
 *
 * ```hbs
 * {{min a b}}
 * ```
 *
 * @function min
 * @param {number[]} numbers A list of numbers to pass to `Math.min`
 * @return {number} The min of the set of numbers
 */
export declare function min(numbers: Array<number>): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<MinSignature>;
export default _default;
