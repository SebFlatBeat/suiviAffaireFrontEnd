import {Gec} from './gec';
import {Sgo} from './sgo';

export interface Sge{
  contratDemande: string;
  contratInitial: string;
  id: number;
  idc: number;
  numeroAffaire: string;
  portefeuille: string;
  prestation: string;
  prm: number;
  gec: Gec;
  sgo: Sgo;
}
