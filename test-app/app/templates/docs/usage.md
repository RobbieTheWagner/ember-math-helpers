## Usage

### Advanced Arithmetic

#### Greatest Common Divisor

The `gcd` helper uses [the Euclidean Algorithm](https://en.wikipedia.org/wiki/Greatest_common_divisor#Using_Euclid's_algorithm) to find the largest positive integer that divides two integers.

```hbs
{{gcd 100 48}}
<!-- Computes 4 -->

{{gcd 6 -10}}
<!-- Computes 2 -->
```

If no arguments are passed, the helper will return 0. If one argument is passed, the helper will simply reflect it back.

#### Least common multiple

The `lcm` helper calculates the smallest positive integer that is divisible by both a and b.

```hbs
{{lcm 15 12}}
<!-- Computes 60 -->
```

### Special Cases

Right now, there is one special case: the `round` helper will also take either
a `decimals` property or an `exp` property. `decimals` will round to the
specified number of decimals, while `exp` will round to the given power of ten.
For example:

```handlebars
{{round 35.855 decimals=2}} {{! prints "35.86" }}
```

```handlebars
{{round 1234567 exp=3}} {{! prints "1235000" }}
```

### Random

| Helper                                       | JavaScript                                                                | HTMLBars                                                |
| -------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------- |
| random (No Args) [, decimals]                | `Math.random()`, `decimals` sets precision from 0-20 (default: 0)         | `{{random}}` or `{{random decimals=4}}`                 |
| random (Upper Bound) [, round]               | capped `Math.random()`, `decimals` sets precision from 0-20 (default: 0)  | `{{random 42}}` or `{{random 42 decimals=4}}`           |
| random (Upper Bound, Lower Bound) [, round]) | bounded `Math.random()`, `decimals` sets precision from 0-20 (default: 0) | `{{random 21 1797}}` or `{{random 21 1797 decimals=4}}` |

## Composable Helpers

There is full support for using all of the helpers together, to do complex math,
even though complex calculations may be better left to JS.

For something like `(15 + 5) / 2 * 10` you could do:

```hbs
{{mult (div (add 15 5) 2) 10}}
```
