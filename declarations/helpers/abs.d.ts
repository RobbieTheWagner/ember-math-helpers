export interface AbsSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Uses `Math.abs` to take the absolute value of the number passed to the helper.
 *
 * ```hbs
 * {{abs a}}
 * ```
 *
 * @function abs
 * @param {number} number The number to take the absolute value of
 * @return {number} The absolute value of the passed number
 */
export declare function abs([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<AbsSignature>;
export default _default;
