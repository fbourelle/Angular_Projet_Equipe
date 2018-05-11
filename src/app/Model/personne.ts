export class Personne {
  public _id: number ;
  public _nom: string ;
  public _prenom: string ;

  constructor(id: number, nom: string, prenom: string) {
    this._id = id;
    this._nom = nom;
    this._prenom = prenom;
  }
}
