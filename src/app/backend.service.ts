import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getProducts():Product[]{
  

    return[{
      name:'ส้มโอ',
      price:220
    },
    {
      name:'มะละกอ',
      price:230
    },
    {
      name:'ทุเรียน',
      price:520
    }];
  }

  getProductById(productId:number):Product{
    return;
  }
}
