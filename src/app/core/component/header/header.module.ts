import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [CommonModule, FormsModule, IonicModule],
  exports :[HeaderComponent]
})
export class HeaderModule { }
