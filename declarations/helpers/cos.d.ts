export interface CosSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.cos` on the number passed to the helper.
 *
 * ```hbs
 * {{cos a}}
 * ```
 *
 * @function cos
 * @param {number} number The number to pass to `Math.cos`
 * @return {number} The cos of the passed number
 */
export declare function cos([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<CosSignature>;
export default _default;
