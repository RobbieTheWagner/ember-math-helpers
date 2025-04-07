export interface AcosSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.acos` on the number passed to the helper.
 *
 * ```hbs
 * {{acos a}}
 * ```
 *
 * @function acos
 * @param {number} number The number to pass to `Math.acos`
 * @return {number} The acos of the passed number
 */
export declare function acos([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<AcosSignature>;
export default _default;
