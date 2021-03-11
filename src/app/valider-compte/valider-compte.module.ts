import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValiderComptePageRoutingModule } from './valider-compte-routing.module';

import { ValiderComptePage } from './valider-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValiderComptePageRoutingModule
  ],
  declarations: [ValiderComptePage]
})
export class ValiderComptePageModule {}
