import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(private http:HttpClient) { }

  httpGet(endpoint: string,sortBy?:string): Observable<Product[]> {
    const url = environment.apiUrl + endpoint + sortBy;
    return this.http.get<Product[]>(url).pipe(
      map(res => res as Product[]),
      catchError(error => this.handleError(error))
    );
  }

  handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? '${error.status} - ${error.statusText}' : 'Server error';
    return throwError(errMsg);
  }
}
