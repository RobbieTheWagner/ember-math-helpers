import Component from '@glimmer/component';

export default class EditableTemplatesComponent extends Component {
  addTemplate = '{{add 1 2}}';
  divTemplate = '{{div 20 10}}';
  modTemplate = '{{mod 11 10}}';
  multTemplate = '{{mult 6 6}}';
  subTemplate = '{{sub 10 2}}';

  gcdTemplate = '{{gcd 10 2}}';

  composableSub = '{{sub 10 1 2 3}}';
  composableComplex = '{{mult (div (add 15 5) 2) 10}}';

  maxTemplate = '{{max 5 2 134 125 1234 5234 2}}';
  minTemplate = '{{min 2 3 5 3 26 7 123}}';

  randomTemplate = '{{random}}';
  randomSingleBound = '{{random 42}}';
  randomTwoBounds = '{{random 21 1797}}';
  randomFloatTwoDecimals = '{{random decimals=2}}';
  randomFloatFourDecimals = '{{random decimals=4}}';
  randomBoundedAndDecimal = '{{random 93 20 decimals=1}}';
  roundTemplate = '{{round 21.23}}';

  classString = `transition
    focus:outline-0
    border border-transparent
    focus:bg-white
    focus:border-grey-light
    placeholder-grey-darkest
    rounded
    bg-grey-lighter
    py-2 pr-4
    pl-10
    block
    w-2/3
    appearance-none
    leading-normal
    ds-input`;
}
