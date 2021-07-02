import { HeaderModule } from './../../../core/component/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { GalleryPagePageRoutingModule } from './gallery-page-routing.module';
import { GalleryPagePage } from './gallery-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    RouterModule.forChild([{ path: '', component: GalleryPagePage }]),
    GalleryPagePageRoutingModule

  ],
  declarations: [GalleryPagePage]
})
export class GalleryPagePageModule {}
