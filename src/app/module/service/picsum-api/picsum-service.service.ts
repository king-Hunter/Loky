import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PicsumServiceService {
  public url = `https://picsum.photos/v2/list`;
  public urlLimit = `https://picsum.photos/v2/list?page=2&limit=3`;
  constructor(private httpClient: HttpClient) {}

  public getGallery(): Observable<any> {
    return this.httpClient.get(this.urlLimit).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
