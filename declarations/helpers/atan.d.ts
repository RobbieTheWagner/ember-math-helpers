export interface AtanSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.atan` on the number passed to the helper.
 *
 * ```hbs
 * {{atan a}}
 * ```
 * @function atan
 * @param {number} number The number to pass to `Math.atan`
 * @return {number} The atan of the passed number
 */
export declare function atan([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<AtanSignature>;
export default _default;
