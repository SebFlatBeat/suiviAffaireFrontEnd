import {Sge} from './sge';

export interface Sgo{
  etatAffaire: string;
  id: number;
  intervention: string;
  numeroAffaire: string;
  sge: Array<Sge>;
}
