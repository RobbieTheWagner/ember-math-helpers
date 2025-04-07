export interface Expm1Signature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.expm1` on the number passed to the helper.
 *
 * ```hbs
 * {{expm1 a}}
 * ```
 *
 * @function expm1
 * @param {number} number The number to pass to `Math.expm1`
 * @return {number} The expm1 of the passed number
 */
export declare function expm1([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<Expm1Signature>;
export default _default;
