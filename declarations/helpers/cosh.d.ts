export interface CoshSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.cosh` on the number passed to the helper.
 *
 * ```hbs
 * {{cosh a}}
 * ```
 *
 * @function cosh
 * @param {number} number The number to pass to `Math.cosh`
 * @return {number} The cosh of the passed number
 */
export declare function cosh([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<CoshSignature>;
export default _default;
