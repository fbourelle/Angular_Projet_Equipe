import { Personne } from './personne';

export class Equipe {
  public _nom: string ;
  public _tabPersonnes: Personne[] ;

  constructor(nom: string, tabpersonnes) {
    this._nom = nom;
    this._tabPersonnes = tabpersonnes;
  }

}

