import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JsonplaceholderServiceService {
  public urlAll = `https://jsonplaceholder.typicode.com/todos`;
  public urlUser = `https://jsonplaceholder.typicode.com/users`;
  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<any> {
    return this.httpClient.get(this.urlAll).pipe(
      map((data) => {
        return data;
      })
    );
  }

  public getUser(): Observable<any> {
    return this.httpClient.get(this.urlUser).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
