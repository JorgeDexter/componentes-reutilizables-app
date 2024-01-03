import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Eje3Page } from './eje3.page';

const routes: Routes = [
  {
    path: '',
    component: Eje3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Eje3PageRoutingModule {}
