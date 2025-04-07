export interface Log2Signature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.log2` on the number passed to the helper.
 *
 * ```hbs
 * {{log2 a}}
 * ```
 *
 * @function log2
 * @param {number} number The number to pass to `Math.log2`
 * @return {number} The log2 of the passed number
 */
export declare function log2([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<Log2Signature>;
export default _default;
