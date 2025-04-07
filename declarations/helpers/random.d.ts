export interface RandomSignature {
    Args: {
        Named: {
            decimals?: number;
        };
        Positional: [upperBound?: number, lowerBound?: number];
    };
    Return: number;
}
/**
 * Executes `Math.random` with the provided upper-bounded randoms, lower- and upper-bounded randoms,
 * and the option to configure decimal precision.
 *
 * ```hbs
 * {{random}} or {{random decimals=4}}
 * ```
 *
 * ```hbs
 * {{random 42}} or {{random 42 decimals=4}}
 * ```
 *
 * ```hbs
 * {{random 21 1797}} or {{random 21 1797 decimals=4}}
 * ```
 *
 * @function random
 * @param {number} upperBound
 * @param {number} lowerBound
 * @param {object} named The set of named arguments, currently just `decimals`.
 * @param {number} [named.decimals] An optional decimal precision value.
 * @return {number} The random generated number
 */
export declare function random(params: RandomSignature['Args']['Named'] | RandomSignature['Args']['Positional'], { decimals }?: RandomSignature['Args']['Named']): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<RandomSignature>;
export default _default;
