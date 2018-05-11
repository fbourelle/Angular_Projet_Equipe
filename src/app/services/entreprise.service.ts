import { Personne } from '../Model/personne';
import { Equipe } from '../Model/equipe';
import { Entreprise } from '../Model/entreprise';

export class EntrepriseService {
  personnel1 = {_id: 0 , _nom: 'Steinberg' , _prenom: 'Saul'};
  personnel2 = {_id: 1 , _nom: 'Topor' , _prenom: 'Roland'};
  personnel3 = {_id: 2 , _nom: 'Sempé' , _prenom: 'Jacques'};
  personnel = [this.personnel1, this.personnel2, this.personnel3];
  equipe1 = {_nom: 'Équipe 1', _tabPersonnes: [this.personnel1, this.personnel2]};
  equipe2 = {_nom: 'Équipe 2', _tabPersonnes: [this.personnel3]};
  equipe = [this.equipe1, this.equipe2];
  entreprise = new Entreprise(this.equipe, this.personnel);

  ajouterPersonneEquipe(idEquipe: number, p: Personne) {
    this.entreprise._tabEquipes[idEquipe]._tabPersonnes.push(p);
  }

  enleverPersonneEquipe(idEquipe: number, id: number) {
    for (let i = 0; i < this.entreprise._tabEquipes[idEquipe]._tabPersonnes.length; i ++) {
      if (id === this.entreprise._tabEquipes[idEquipe]._tabPersonnes[i]._id) {
        this.entreprise._tabEquipes[idEquipe]._tabPersonnes.splice(i, 1);
      }
    }
  }

  ajouterEmploye(p: Personne) {
    console.log('entreprise' + this.entreprise);
    this.entreprise._tabEmployes.push(p);
  }

  supprimerEmploye(id: string) {
    for (let i = 0; i < this.entreprise._tabEmployes.length; i ++) {
      if (id === this.entreprise._tabEmployes[i]._nom) {
        this.entreprise._tabEmployes.splice(i, 1);
      }
    }
    for (let i = 0; i < this.entreprise._tabEquipes.length; i++) {
      for (let j = 0; j < this.entreprise._tabEquipes[i]._tabPersonnes.length; j++) {
        if (id === this.entreprise._tabEquipes[i]._tabPersonnes[j]._nom) {
          this.entreprise._tabEquipes[i]._tabPersonnes.splice(j, 1);
        }
      }
    }
  }
  ajouterEquipe(e: Equipe) {
    this.entreprise._tabEquipes.push(e);
  }
  supprimerEquipe(name: string) {
    for (let i = 0; i < this.entreprise._tabEquipes.length; i ++) {
      if (name === this.entreprise._tabEquipes[i]._nom) {
        this.entreprise._tabEquipes.splice(i, 1);
      }
    }
  }

}
