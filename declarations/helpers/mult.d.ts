export interface MultSignature {
    Args: {
        Positional: Array<number>;
    };
    Return: number;
}
/**
 * Multiplies two or more numbers
 *
 * ```hbs
 * {{mult a b}}
 * ```
 *
 * @function mult
 * @param {number[]} numbers A list of numbers to multiply
 * @return {number} The product of all the passed numbers
 */
export declare function mult(numbers: Array<number>): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<MultSignature>;
export default _default;
