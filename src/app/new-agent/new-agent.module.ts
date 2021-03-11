import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewAgentPageRoutingModule } from './new-agent-routing.module';

import { NewAgentPage } from './new-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewAgentPageRoutingModule
  ],
  declarations: [NewAgentPage]
})
export class NewAgentPageModule {}
