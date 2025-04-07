export interface AsinhSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.asinh` on the number passed to the helper.
 *
 * ```hbs
 * {{asinh a}}
 * ```
 *
 * @function asinh
 * @param {number} number The number to pass to `Math.asinh`
 * @return {number} The asinh of the passed number
 */
export declare function asinh([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<AsinhSignature>;
export default _default;
