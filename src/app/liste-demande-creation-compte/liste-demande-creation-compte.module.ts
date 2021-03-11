import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeDemandeCreationComptePageRoutingModule } from './liste-demande-creation-compte-routing.module';

import { ListeDemandeCreationComptePage } from './liste-demande-creation-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeDemandeCreationComptePageRoutingModule
  ],
  declarations: [ListeDemandeCreationComptePage]
})
export class ListeDemandeCreationComptePageModule {}
