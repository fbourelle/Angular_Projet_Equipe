import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../Model/personne';
import { EntrepriseService} from '../services/entreprise.service';
import {Entreprise} from '../Model/entreprise';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})

export class PersonComponent implements OnInit {
  @Input() person: Personne;

  entreprise: Entreprise;

  constructor(private entrepriseService: EntrepriseService) {
  }

  ngOnInit() {
    this.entreprise = this.entrepriseService.entreprise;
  }



  onSupprimer(id: string) {
    this.entrepriseService.supprimerEmploye(id);
  }
}
