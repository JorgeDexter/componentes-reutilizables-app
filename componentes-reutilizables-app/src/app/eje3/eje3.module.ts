import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Eje3PageRoutingModule } from './eje3-routing.module';

import { Eje3Page } from './eje3.page';
import { ColorListComponent } from '../color-list/color-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Eje3PageRoutingModule
  ],
  declarations: [Eje3Page,ColorListComponent]
})
export class Eje3PageModule {}
