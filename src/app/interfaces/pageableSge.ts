import {Sge} from './sge';

export interface PageableSge{
  numberOfElements: number;
  content: Sge[];
}
