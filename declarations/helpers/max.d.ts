export interface MaxSignature {
    Args: {
        Positional: Array<number>;
    };
    Return: number;
}
/**
 * Takes two or more numbers, and finds the max of the set using `Math.max`
 *
 * ```hbs
 * {{max a b}}
 * ```
 *
 * @function max
 * @param {number[]} numbers A list of numbers to pass to `Math.max`
 * @return {number} The max of the set of numbers
 */
export declare function max(numbers: Array<number>): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<MaxSignature>;
export default _default;
