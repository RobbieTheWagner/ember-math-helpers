export interface FroundSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.fround` on the number passed to the helper.
 *
 * ```hbs
 * {{fround a}}
 * ```
 *
 * @function fround
 * @param {number} number The number to pass to `Math.fround`
 * @return {number} The fround of the passed number
 */
export declare function fround([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<FroundSignature>;
export default _default;
