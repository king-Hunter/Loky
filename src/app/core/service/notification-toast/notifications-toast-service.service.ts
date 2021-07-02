import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastNotificationsService {
  constructor(private toastController: ToastController) {}

  public successToast(message: any) {
    this.setToast('success', message);
  }
  public alertToast(message: any) {
    this.setToast('warning', message);
  }
  public errorToast(message: any) {
    this.setToast('danger', message);
  }

  async setToast(typeColor: string, typeMessage: string) {
    const toast = await this.toastController.create({
      color: typeColor,
      message: typeMessage,
      duration: 2000,
    });
    toast.present();
  }
}
