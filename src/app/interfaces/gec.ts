import {Sge} from './sge';

export interface Gec{
  etatContractuel: string;
  id: number;
  idc: number;
  modeReleve: string;
  numeroDt: number;
  prestationRealise: string;
  realisation: string;
  statutDt: string;
  sge: Array<Sge>;
}
