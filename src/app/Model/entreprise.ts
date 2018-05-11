import { Personne } from './personne';
import { Equipe } from './equipe';

export class Entreprise {
  public _tabEquipes: Equipe[] ;
  public _tabEmployes: Personne[] ;

  constructor(tabequipe, tabemployes) {
    this._tabEquipes = tabequipe;
    this._tabEmployes = tabemployes;
  }

}
