import Component from '@glimmer/component';
import { compileHBS } from 'ember-repl/formats/hbs';
import * as helpers from 'ember-math-helpers';
import { cached } from '@glimmer/tracking';

export default class RenderTemplate extends Component {
  @cached
  get compileResult() {
    return compileHBS(this.args.templateString, {
      scope: { ...helpers },
    });
  }
}
