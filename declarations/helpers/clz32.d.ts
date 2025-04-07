export interface Clz32Signature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.clz32` on the number passed to the helper.
 *
 * ```hbs
 * {{clz32 a}}
 * ```
 *
 * @function clz32
 * @param {number} number The number to pass to `Math.clz32`
 * @return {number} The clz32 of the passed number
 */
export declare function clz32([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<Clz32Signature>;
export default _default;
