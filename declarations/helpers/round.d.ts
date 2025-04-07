export interface RoundSignature {
    Args: {
        Named: {
            decimals?: number;
            exp?: number;
        };
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.round` on the number passed to the helper.
 *
 * ```hbs
 * {{round a}}
 * ```
 *
 * You can provide optional named arguments for `decimals` and `exp` that will adjust
 * the number of decimals used for rounding and the exponent (the 10 logarithm of the adjustment base) accordingly.
 *
 * For example:
 *
 * ```hbs
 * {{round a decimals=2}}
 * ```
 *
 * @function round
 * @param {number} number The number to pass to `Math.round`
 * @param {object} named The set of named arguments, currently `decimals` and `exp`.
 * @param {number} [named.decimals] An optional param to specify the number of decimals to round to.
 * @param {number} [named.exp] An optional param to specify the exponent (the 10 logarithm of the adjustment base).
 * @return {number} The number rounded based on the number of decimals specified.
 */
export declare function round([number]: [number], namedArgs: RoundSignature['Args']['Named']): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<RoundSignature>;
export default _default;
