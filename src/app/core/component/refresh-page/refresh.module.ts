import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RefreshPageComponent } from './refresh-page.component';

@NgModule({
  declarations: [RefreshPageComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [RefreshPageComponent],
})
export class RefreshModule {}
