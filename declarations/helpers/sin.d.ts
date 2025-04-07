export interface SinSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.sin` on the number passed to the helper.
 *
 * ```hbs
 * {{sin a}}
 * ```
 *
 * @function sin
 * @param {number} number The number to pass to `Math.sin`
 * @return {number} The sin of the passed number
 */
export declare function sin([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<SinSignature>;
export default _default;
