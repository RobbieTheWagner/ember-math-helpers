export interface ModSignature {
    Args: {
        Positional: Array<number>;
    };
    Return: number;
}
/**
 * Takes the modulus of two or more numbers
 *
 * ```hbs
 * {{mod a b}}
 * ```
 *
 * @function mod
 * @param {number[]} numbers A list of numbers to modulus
 * @return {number} The modulus of all the passed numbers
 */
export declare function mod(numbers: Array<number>): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<ModSignature>;
export default _default;
