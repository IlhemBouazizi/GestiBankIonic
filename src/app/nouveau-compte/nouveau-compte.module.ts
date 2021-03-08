import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouveauComptePageRoutingModule } from './nouveau-compte-routing.module';

import { NouveauComptePage } from './nouveau-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouveauComptePageRoutingModule
  ],
  declarations: [NouveauComptePage]
})
export class NouveauComptePageModule {}
