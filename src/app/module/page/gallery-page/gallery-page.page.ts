import { PicsumServiceService } from './../../service/picsum-api/picsum-service.service';
import { ToastNotificationsService } from './../../../core/service/notification-toast/notifications-toast-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.page.html',
  styleUrls: ['./gallery-page.page.scss'],
})
export class GalleryPagePage implements OnInit {
public data: any;
  constructor(private toastNotificationService: ToastNotificationsService,
  private picsumService: PicsumServiceService
  ) { }

  ngOnInit() {
    this.getServiceGallery();
  }

   public getServiceGallery() {
    this.picsumService.getGallery().subscribe(
      (respuesta) => {
        this.toastNotificationService.successToast('Datos obtenidos');
        this.data = respuesta;
      },
      (error) => {
        this.toastNotificationService.errorToast('Error al buscar los datos');
      }
    );
  }
}
