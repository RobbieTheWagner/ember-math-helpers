export interface Log1pSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.log1p` on the number passed to the helper.
 *
 * ```hbs
 * {{log1p a}}
 * ```
 *
 * @function log1p
 * @param {number} number The number to pass to `Math.log1p`
 * @return {number} The log1p of the passed number
 */
export declare function log1p([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<Log1pSignature>;
export default _default;
