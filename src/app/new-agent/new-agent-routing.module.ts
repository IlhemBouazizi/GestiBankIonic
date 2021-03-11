import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewAgentPage } from './new-agent.page';

const routes: Routes = [
  {
    path: '',
    component: NewAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewAgentPageRoutingModule {}
