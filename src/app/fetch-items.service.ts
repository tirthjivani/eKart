import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IItems } from './items';
import { throwError as _throw } from 'rxjs';
// import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class FetchItemsService {
  private _url: string = 'https://fakestoreapi.com/products';
  // private _url: string = '/assets/data/items.json';
  constructor(private http: HttpClient) {}

  getItems(): Observable<IItems[]> {
    return this.http.get<IItems[]>(this._url);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'server error');
  }
}
