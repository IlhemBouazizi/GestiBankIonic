import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeDemandeCreationComptePage } from './liste-demande-creation-compte.page';

const routes: Routes = [
  {
    path: '',
    component: ListeDemandeCreationComptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeDemandeCreationComptePageRoutingModule {}
