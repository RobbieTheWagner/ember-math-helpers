export interface LcmSignature {
    Args: {
        Positional: [number, number];
    };
    Return: number;
}
/**
 * Returns the smallest positive integer that is divisible by both number1 and number2
 *
 * ```hbs
 * {{lcm a b}}
 * ```
 *
 * @function lcm
 * @param {number} number1 The first number
 * @param {number} number2 The second number
 * @return {number} The LCM of the two numbers passed
 */
export declare function lcm([number1, number2]: [(number | undefined)?, (number | undefined)?]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<LcmSignature>;
export default _default;
