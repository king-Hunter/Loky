import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryPagePage } from './gallery-page.page';

const routes: Routes = [
  {
    path: '',
    component: GalleryPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryPagePageRoutingModule {}
