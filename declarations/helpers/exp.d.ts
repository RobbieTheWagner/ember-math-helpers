export interface ExpSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.exp` on the number passed to the helper.
 *
 * ```hbs
 * {{exp a}}
 * ```
 *
 * @function exp
 * @param {number} number The number to pass to `Math.exp`
 * @return {number} The exp of the passed number
 */
export declare function exp([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<ExpSignature>;
export default _default;
