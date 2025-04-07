export interface AsinSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.asin` on the number passed to the helper.
 *
 * ```hbs
 * {{asin a}}
 * ```
 *
 * @function asin
 * @param {number} number The number to pass to `Math.asin`
 * @return {number} The asin of the passed number
 */
export declare function asin([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<AsinSignature>;
export default _default;
