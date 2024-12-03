import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class EditableTemplates extends Component {
  @tracked addTemplate = '{{add 1 2}}';
  @tracked divTemplate = '{{div 20 10}}';
  @tracked modTemplate = '{{mod 11 10}}';
  @tracked multTemplate = '{{mult 6 6}}';
  @tracked subTemplate = '{{sub 10 2}}';

  @tracked gcdTemplate = '{{gcd 10 2}}';

  @tracked composableSub = '{{sub 10 1 2 3}}';
  @tracked composableComplex = '{{mult (div (add 15 5) 2) 10}}';

  @tracked maxTemplate = '{{max 5 2 134 125 1234 5234 2}}';
  @tracked minTemplate = '{{min 2 3 5 3 26 7 123}}';

  @tracked randomTemplate = '{{random}}';
  @tracked randomSingleBound = '{{random 42}}';
  @tracked randomTwoBounds = '{{random 21 1797}}';
  @tracked randomFloatTwoDecimals = '{{random decimals=2}}';
  @tracked randomFloatFourDecimals = '{{random decimals=4}}';
  @tracked randomBoundedAndDecimal = '{{random 93 20 decimals=1}}';
  @tracked roundTemplate = '{{round 21.23}}';

  classString = `docs-transition
    focus:docs-outline-0
    docs-border docs-border-transparent
    focus:docs-bg-white
    focus:docs-border-grey-light
    docs-placeholder-grey-darkest
    docs-rounded
    docs-bg-grey-lighter
    docs-py-2 docs-pr-4
    docs-pl-10
    docs-block
    docs-w-2/3
    docs-appearance-none
    docs-leading-normal
    docs-ds-input`;
}
