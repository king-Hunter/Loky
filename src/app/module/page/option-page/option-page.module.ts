import { RefreshModule } from './../../../core/component/refresh-page/refresh.module';
import { HeaderModule } from './../../../core/component/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OptionPagePageRoutingModule } from './option-page-routing.module';
import { OptionPagePage } from './option-page.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionPagePageRoutingModule,
    HeaderModule,
    RefreshModule,
    RouterModule.forChild([{ path: '', component: OptionPagePage }]),
  ],
  declarations: [OptionPagePage],
})
export class OptionPagePageModule {}
