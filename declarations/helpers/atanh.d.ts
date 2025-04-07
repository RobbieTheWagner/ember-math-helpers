export interface AtanhSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.atanh` on the number passed to the helper.
 *
 * ```hbs
 * {{atanh a}}
 * ```
 *
 * @function atanh
 * @param {number} number The number to pass to `Math.atanh`
 * @return {number} The atanh of the passed number
 */
export declare function atanh([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<AtanhSignature>;
export default _default;
