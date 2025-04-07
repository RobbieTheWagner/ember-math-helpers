export interface LogESignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.log` on the number passed to the helper.
 *
 * ```hbs
 * {{log-e a}}
 * ```
 *
 * @function log-e
 * @param {number} number The number to pass to `Math.log`
 * @return {number} The log of the passed number
 */
export declare function logE([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<LogESignature>;
export default _default;
