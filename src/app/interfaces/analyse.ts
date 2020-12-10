import {Sgo} from './sgo';
import {Gec} from './gec';
import {Sge} from './sge';

export interface Analyse {
  sge: Array<Sge>;
  sgo: Array<Sgo>;
  gec: Array<Gec>;
}

