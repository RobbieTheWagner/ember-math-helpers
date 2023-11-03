import Component from '@glimmer/component';
import { compileHBS } from 'ember-repl';

import add from 'ember-math-helpers/helpers/add';
import sub from 'ember-math-helpers/helpers/sub';

export class Renderer extends Component {
  compileResult = compileHBS(this.args.templateString, { scope: { add, sub } });
}
