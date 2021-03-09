import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NouveauComptePage } from './nouveau-compte.page';

const routes: Routes = [
  {
    path: '',
    component: NouveauComptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouveauComptePageRoutingModule {}
