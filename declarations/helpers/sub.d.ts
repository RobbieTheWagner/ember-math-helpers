export interface SubSignature {
    Args: {
        Positional: Array<number>;
    };
    Return: number;
}
/**
 * Subtracts two or more numbers
 *
 * ```hbs
 * {{sub a b}}
 * ```
 *
 * @function sub
 * @param {number[]} numbers A list of numbers to subtract
 * @return {number} The difference of all the passed numbers
 */
export declare function sub(numbers: Array<number>): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<SubSignature>;
export default _default;
