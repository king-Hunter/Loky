import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-show-info-user',
  templateUrl: './show-info-user.component.html',
  styleUrls: ['./show-info-user.component.scss'],
})
export class ShowInfoUserComponent implements OnInit {
@Input() public userData: any;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  public closeModal() {
    this.modalCtrl.dismiss();
  }
}
