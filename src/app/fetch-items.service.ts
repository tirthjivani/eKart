import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IItems } from './items';
import { throwError as _throw } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FetchItemsService {
  private _url: string = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) {}

  getItems(): Observable<IItems[]> {
    return this.http.get<IItems[]>(this._url);
    //return this.http.get<IItems[]>(this._url);
    // .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'server error');
  }
}
