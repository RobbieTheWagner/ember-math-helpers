export interface TruncSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.trunc` on the number passed to the helper.
 *
 * ```hbs
 * {{trunc a}}
 * ```
 *
 * @function trunc
 * @param {number} number The number to pass to `Math.trunc`
 * @return {number} The trunc of the passed number
 */
export declare function trunc([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<TruncSignature>;
export default _default;
