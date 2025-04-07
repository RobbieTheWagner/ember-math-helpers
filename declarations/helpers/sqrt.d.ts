export interface SqrtSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.sqrt` on the number passed to the helper.
 *
 * ```hbs
 * {{sqrt a}}
 * ```
 *
 * @function sqrt
 * @param {number} number The number to pass to `Math.sqrt`
 * @return {number} The sqrt of the passed number
 */
export declare function sqrt([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<SqrtSignature>;
export default _default;
