export interface GcdSignature {
    Args: {
        Positional: [number, number];
    };
    Return: number;
}
/**
 * Returns the greatest positive integer that divides each of two integers
 *
 * ```hbs
 * {{gcd a b}}
 * ```
 *
 * @function gcd
 * @param {number} number1 The first number
 * @param {number} number2 The second number
 * @return {number} The GCD of the two numbers passed
 */
export declare function gcd([number1, number2]: [(number | undefined)?, (number | undefined)?]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<GcdSignature>;
export default _default;
