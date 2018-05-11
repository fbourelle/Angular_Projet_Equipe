import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../Model/personne';
import {Entreprise} from '../Model/entreprise';
import {EntrepriseService} from '../services/entreprise.service';
import { Equipe } from '../Model/equipe';

@Component({
  selector: 'app-personneequipe',
  templateUrl: './personneequipe.component.html',
  styleUrls: ['./personneequipe.component.scss']
})
export class PersonneequipeComponent implements OnInit {
  @Input() person: Personne;
  @Input() equipe: Equipe;
  entreprise: Entreprise;
  idEquipe: number;
  constructor(private entrepriseService: EntrepriseService) {
  }

  ngOnInit() {
    this.entreprise = this.entrepriseService.entreprise;
  }

  onSupprimerPersonneEquipe(nomEquipe: string, id: number) {
    for (let i = 0; i < this.entreprise._tabEquipes.length; i++) {
      if (nomEquipe === this.entreprise._tabEquipes[i]._nom) {
        this.idEquipe = i;
        this.entrepriseService.enleverPersonneEquipe(this.idEquipe, id);
      }
    }
  }
}
