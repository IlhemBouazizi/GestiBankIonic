import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValiderComptePage } from './valider-compte.page';

const routes: Routes = [
  {
    path: '',
    component: ValiderComptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValiderComptePageRoutingModule {}
