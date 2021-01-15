import {Blocage} from './blocage';


export interface PageableBlocage{
  [x: string]: number;
  numberOfElements: number;
  content: Blocage[];
}
