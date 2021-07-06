import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-refresh-page',
  templateUrl: './refresh-page.component.html',
  styleUrls: ['./refresh-page.component.scss'],
})
export class RefreshPageComponent implements OnInit {
@Output() response = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  doRefresh(event) {
    this.response.emit({active : false});
    setTimeout(() => {
      event.target.complete();
      this.response.emit({active : true});
    }, 2000);
  }
}
