import {Gec} from './gec';
import {Cosy} from './cosy';

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
  cosy: Cosy;
}
