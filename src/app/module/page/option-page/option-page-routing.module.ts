import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionPagePage } from './option-page.page';

const routes: Routes = [
  {
    path: '',
    component: OptionPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionPagePageRoutingModule {}
