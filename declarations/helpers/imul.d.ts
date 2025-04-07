export interface ImulSignature {
    Args: {
        Positional: [number, number];
    };
    Return: number;
}
/**
 * Executes `Math.imul` on the number passed to the helper.
 *
 * ```hbs
 * {{imul a}}
 * ```
 *
 * @function imul
 * @param {number} number1 The first number to pass to `Math.imul`
 * @param {number} number2 The second number to pass to `Math.imul`
 * @return {number} The imul of the passed numbers
 */
export declare function imul([number1, number2]: [number, number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<ImulSignature>;
export default _default;
