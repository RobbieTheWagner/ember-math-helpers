export interface TanhSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.tanh` on the number passed to the helper.
 *
 * ```hbs
 * {{tanh a}}
 * ```
 *
 * @function tanh
 * @param {number} number The number to pass to `Math.tanh`
 * @return {number} The tanh of the passed number
 */
export declare function tanh([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<TanhSignature>;
export default _default;
