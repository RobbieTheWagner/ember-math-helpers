export interface TanSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.tan` on the number passed to the helper.
 *
 * ```hbs
 * {{tan a}}
 * ```
 *
 * @function tan
 * @param {number} number The number to pass to `Math.tan`
 * @return {number} The tan of the passed number
 */
export declare function tan([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<TanSignature>;
export default _default;
