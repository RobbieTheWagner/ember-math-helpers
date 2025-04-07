export interface SignSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.sign` on the number passed to the helper.
 *
 * ```hbs
 * {{sign a}}
 * ```
 *
 * @function sign
 * @param {number} number The number to pass to `Math.sign`
 * @return {number} The sign of the passed number
 */
export declare function sign([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<SignSignature>;
export default _default;
