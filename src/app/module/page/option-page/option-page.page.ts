import { ToastNotificationsService } from './../../../core/service/notification-toast/notifications-toast-service.service';
import { JsonplaceholderServiceService } from './../../service/jsonplaceholder-api/jsonplaceholder-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-option-page',
  templateUrl: './option-page.page.html',
  styleUrls: ['./option-page.page.scss'],
})
export class OptionPagePage implements OnInit {
  @ViewChild(IonInfiniteScroll ,{static:false}) infiniteScroll: IonInfiniteScroll;
  public data: any;
  private originalData: any;
  public scroll : any;
  constructor(
    private serviceJsonPlaceHolderService: JsonplaceholderServiceService,
    private toastNotificationService: ToastNotificationsService
  ) {
    this.scroll = true;
  }

  ngOnInit() {
    this.getServiceAll();
  }

  public getServiceAll() {
    this.serviceJsonPlaceHolderService.getAll().subscribe(
      (respuesta) => {
        this.toastNotificationService.successToast('Datos obtenidos');
        const tempData = respuesta;
        tempData.forEach((element: { completedLabel: string; completedColor: string; completed: any; }) => {
          element.completedLabel = 'Sin Completar';
          element.completedColor = 'danger';
          if (element.completed) {
            element.completedLabel = 'Completado';
            element.completedColor = 'success';
          }
        });
        this.scroll = true;
        this.data = tempData;
        this.originalData = tempData;
        this.data = this.data.slice(0,15);
      },
      (error) => {
        this.toastNotificationService.errorToast('Error al buscar los datos');
      }
    );
  }

  public loadData(event: { target: { complete: () => void; }; }) {
        setTimeout(() => {
            event.target.complete();
            if (this.data.length < this.originalData.length) {
                let len = this.data.length;
                for (let i = len; i <= len + 6; i++) {
                    if (this.originalData[i] === undefined) {
                        this.scroll = false;
                        break;
                    }
                    this.data.push(this.originalData[i]);
                }
            }
        }, 500);
    }
    public reloadData(event: any){
      if (event) {
        this.getServiceAll();
      }
    }
}
