export interface Log10Signature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.log10` on the number passed to the helper.
 *
 * ```hbs
 * {{log10 a}}
 * ```
 *
 * @function log10
 * @param {number} number The number to pass to `Math.log10`
 * @return {number} The log10 of the passed number
 */
export declare function log10([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<Log10Signature>;
export default _default;
