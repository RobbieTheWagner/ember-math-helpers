export interface DivSignature {
    Args: {
        Positional: Array<number>;
    };
    Return: number;
}
/**
 * Divides two or more numbers
 *
 * ```hbs
 * {{div a b}}
 * ```
 *
 * @function div
 * @param {number[]} numbers A list of numbers to divide
 * @return {number} The result of dividing all the passed numbers
 */
export declare function div(numbers: Array<number>): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<DivSignature>;
export default _default;
