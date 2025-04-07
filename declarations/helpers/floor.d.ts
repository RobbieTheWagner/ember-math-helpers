export interface FloorSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.floor` on the number passed to the helper.
 *
 * ```hbs
 * {{floor a}}
 * ```
 *
 * @function floor
 * @param {number} number The number to pass to `Math.floor`
 * @return {number} The floor of the passed number
 */
export declare function floor([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<FloorSignature>;
export default _default;
