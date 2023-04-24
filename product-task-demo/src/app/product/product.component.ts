import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { ProductService } from '../service/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit,OnDestroy {
  unSubscribe$:Subject<void> = new Subject();
  productData:Product[] = [];
  isLoading:boolean;
  inOrder:string = 'desc';

  constructor(private producstServ:ProductService) { }

  ngOnInit(): void {
    this.getAllProductData();
  }

  getAllProductData(sort?:string) {
    this.isLoading=true;
    this.inOrder=(this.inOrder=='asc')?'desc':'asc';
    sort=sort?`?_sort=${sort}&_order=${this.inOrder}`:'';
    this.producstServ.getProducts(sort).pipe(takeUntil(this.unSubscribe$)).subscribe((res:Product[])=>{
      this.productData=res;
    });
    this.isLoading=false;
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
