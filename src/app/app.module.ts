import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { EquipeComponent } from './equipe/equipe.component';
import {EntrepriseService} from './services/entreprise.service';
import { PersonneequipeComponent } from './personneequipe/personneequipe.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    EquipeComponent,
    PersonneequipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    EntrepriseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
