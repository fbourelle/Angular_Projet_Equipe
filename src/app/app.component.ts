import { Component, Input, OnInit } from '@angular/core';
import { Personne } from './Model/personne';
import { NgForm } from '@angular/forms';
import { Equipe} from './Model/equipe';
import {formArrayNameProvider} from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { Entreprise } from './Model/entreprise';
import { EntrepriseService} from './services/entreprise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  entreprise: Entreprise;
  equipeName: string;
  p1: Personne;
  e1: Equipe;
  id: number;
  id_p1: number;
  message: string;

  constructor(private entrepriseService: EntrepriseService) {
  }

  ngOnInit() {
    this.entreprise = this.entrepriseService.entreprise;
    console.log('this.entreprise = ' + this.entreprise._tabEmployes);
    console.log(this.entreprise._tabEquipes[0]._tabPersonnes[0]._nom);
  }
  onAjouter(form: NgForm) {
    console.log(form.value['nom']);
    console.log(form.value['prenom']);
    console.log(form.value['equipe']);
    if (form.value['nom'] && form.value['prenom']) {
      this.id_p1 = (this.entreprise._tabEmployes[this.entreprise._tabEmployes.length-1]._id)+1;
      this.p1 = new Personne(this.id_p1, form.value['nom'], form.value['prenom']);
      console.log(this.p1);
      this.entrepriseService.ajouterEmploye(this.p1);

      this.onMessage("succes_participant");

      for (let i = 0 ; i < this.entreprise._tabEquipes.length; i++) {
        if (form.value['equipe']) {
          console.log(this.entreprise._tabEquipes[i]._nom);
          if (this.entreprise._tabEquipes[i]._nom === form.value['equipe']) {
            console.log(i);
            this.id = i;
            this.entrepriseService.ajouterPersonneEquipe(this.id, this.p1);
          }
        }
      }
    }

    else {
      this.onMessage("erreur_participant");
    }

  }
  onAjouterPersonneEquipe(form: NgForm) {

    console.log(form.value['employe']);
    if (form.value['employe'] && form.value['equipe']) {

      // on récupère le participant sélectionné
      for (let i = 0; i < this.entreprise._tabEmployes.length; i++) {
        console.log("this.entreprise._tabEmployes[i]._id = " + this.entreprise._tabEmployes[i]._id);
        if (form.value['employe'] == this.entreprise._tabEmployes[i]._id) {
          this.p1 = new Personne(form.value['employe'], this.entreprise._tabEmployes[i]._nom, this.entreprise._tabEmployes[i]._prenom);
          console.log(this.p1);
        }
      }

      // on récupère l'équipe sélectionnée
      for (let i = 0 ; i < this.entreprise._tabEquipes.length; i++) {
        if (this.entreprise._tabEquipes[i]._nom === form.value['equipe']) {
          this.id = i;
          console.log("this.id = " + this.id);
        }
      }

      //on vérifie si le participant n'est pas déjà dans l'équipe
      for (let i = 0 ; i < this.entreprise._tabEquipes[this.id]._tabPersonnes.length; i++) {
        console.log(this.entreprise._tabEquipes[this.id]._tabPersonnes[i]._id);
        if (this.entreprise._tabEquipes[this.id]._tabPersonnes[i]._id == form.value['employe']) {
          return this.onMessage("erreur_equipe_participant");
        }
      }

      // On ajoute le participant à l'équipe
      this.entrepriseService.ajouterPersonneEquipe(this.id, this.p1);
      this.onMessage("succes_equipe_participant");
    }
  }

  onAjouterEquipe() {
    console.log('this.equipeName = ' + this.equipeName);
    if (this.equipeName) {
      for (let i = 0 ; i < this.entreprise._tabEquipes.length; i++) {
        if (this.entreprise._tabEquipes[i]._nom === this.equipeName) {
          console.log(i);
          return this.onMessage("erreur_equipe_alreadey_exist");
        }
      }
      this.e1 = new Equipe(this.equipeName, []);
      this.entrepriseService.ajouterEquipe(this.e1);
      this.equipeName = "";
      this.onMessage("succes_equipe");
      } else {
      this.onMessage("erreur_equipe");
    }
  }

  onMessage(message) {
    this.message = message;
  }


}
