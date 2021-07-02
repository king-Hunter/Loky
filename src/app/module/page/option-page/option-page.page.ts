import { ToastNotificationsService } from './../../../core/service/notification-toast/notifications-toast-service.service';
import { JsonplaceholderServiceService } from './../../service/jsonplaceholder-api/jsonplaceholder-service.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-option-page',
  templateUrl: './option-page.page.html',
  styleUrls: ['./option-page.page.scss'],
})
export class OptionPagePage implements OnInit {
  public data: any;
  constructor(
    private serviceJsonPlaceHolderService: JsonplaceholderServiceService,
    private toastNotificationService: ToastNotificationsService
  ) {}

  ngOnInit() {
    this.getServiceAll();
  }

  public getServiceAll() {
    this.serviceJsonPlaceHolderService.getAll().subscribe(
      (respuesta) => {
        this.toastNotificationService.successToast('Datos obtenidos');
        const tempData = respuesta;
        tempData.forEach((element) => {
          element.completedLabel = 'Sin Completar';
          element.completedColor = 'danger';
          if (element.completed) {
            element.completedLabel = 'Completado';
            element.completedColor = 'success';
          }
        });
        this.data = tempData;
      },
      (error) => {
        this.toastNotificationService.errorToast('Error al buscar los datos');
      }
    );
  }
}
