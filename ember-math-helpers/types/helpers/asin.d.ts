import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface AsinSignature {
  Positional: Positional;
  Return: Return;
}

export default class AsinHelper extends Helper<AsinSignature> {}
