export interface AcoshSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.acosh` on the number passed to the helper.
 *
 * ```hbs
 * {{acosh a}}
 * ```
 *
 * @function acosh
 * @param {number} number The number to pass to `Math.acosh`
 * @return {number} The acosh of the passed number
 */
export declare function acosh([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<AcoshSignature>;
export default _default;
