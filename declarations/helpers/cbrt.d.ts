export interface CbrtSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.cbrt` on the number passed to the helper.
 *
 * ```hbs
 * {{cbrt a}}
 * ```
 *
 * @function cbrt
 * @param {number} number The number to pass to `Math.cbrt`
 * @return {number} The cbrt of the passed number
 */
export declare function cbrt([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<CbrtSignature>;
export default _default;
