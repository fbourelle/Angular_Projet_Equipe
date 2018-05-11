import {Component, Input, OnInit} from '@angular/core';
import { Equipe } from '../Model/equipe';
import { EntrepriseService} from '../services/entreprise.service';
import {Entreprise} from '../Model/entreprise';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {
  @Input() equipe: Equipe;

  entreprise: Entreprise;

  constructor(private entrepriseService: EntrepriseService) {
  }

  ngOnInit() {
    this.entreprise = this.entrepriseService.entreprise;
  }

  onSupprimerEquipe(name: string) {
    this.entrepriseService.supprimerEquipe(name);
  }
}
