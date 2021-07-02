import { ShowInfoUserComponent } from './../../../core/component/show-info-user/show-info-user.component';
import { JsonplaceholderServiceService } from './../../service/jsonplaceholder-api/jsonplaceholder-service.service';
import { ToastNotificationsService } from './../../../core/service/notification-toast/notifications-toast-service.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.page.html',
  styleUrls: ['./user-page.page.scss'],
})
export class UserPagePage implements OnInit {
  public data: any;
  constructor(
    private modalController: ModalController,
    private toastNotificationService: ToastNotificationsService,
    private jsonPlaceHolderService: JsonplaceholderServiceService
  ) {}

  ngOnInit() {
    this.getServiceUser();
  }

  public getServiceUser() {
    this.jsonPlaceHolderService.getUser().subscribe(
      (response) => {
        this.toastNotificationService.successToast(
          'Usuarios Obtenidos con exito'
        );
        this.data = response;
      },
      (error) => {
        this.toastNotificationService.errorToast('Error con el servidor');
      }
    );
  }
  public openInfoUser(user: any) {
    this.showModal(user);
  }

  async showModal(params: any) {
    const modal = await this.modalController.create({
      component: ShowInfoUserComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: {
        userData: params,
      },
    });
    return await modal.present();
  }
}
