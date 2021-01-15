import {Sge} from './sge';
import {User} from './user';

export interface Blocage {
  id: number;
  blocageSource: string;
  sge: Sge;
  userApp: User;
}
