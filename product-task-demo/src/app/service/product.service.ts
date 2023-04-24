import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { BaseService } from './base.service';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private baseServ:BaseService) { }
  
  getProducts(sort?:string):Observable<Product[]> {
    try {
      return this.baseServ.httpGet('products',sort);
    } catch (error) {
      throw error;
    }
  }
}
