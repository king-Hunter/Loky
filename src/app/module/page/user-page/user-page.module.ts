import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPagePageRoutingModule } from './user-page-routing.module';

import { UserPagePage } from './user-page.page';

import { HeaderModule } from './../../../core/component/header/header.module';
import { RouterModule } from '@angular/router';
import { ShowInfoUserComponent } from '../../../core/component/show-info-user/show-info-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPagePageRoutingModule,
    HeaderModule,
    RouterModule.forChild([{ path: '', component: UserPagePage }]),
  ],
  declarations: [UserPagePage, ShowInfoUserComponent]
})
export class UserPagePageModule {}
