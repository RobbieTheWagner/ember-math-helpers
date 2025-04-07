export interface CeilSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.ceil` on the number passed to the helper.
 *
 * ```hbs
 * {{ceil a}}
 * ```
 *
 * @function ceil
 * @param {number} number The number to pass to `Math.ceil`
 * @return {number} The ceil of the passed number
 */
export declare function ceil([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<CeilSignature>;
export default _default;
