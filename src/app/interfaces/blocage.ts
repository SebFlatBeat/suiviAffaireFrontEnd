import {Sge} from './sge';

export interface Blocage {
  id: number;
  blocageSource: string;
  sge: Sge;
}
