import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Product } from '../Product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChildren(ProductItemComponent)
  productItems:QueryList<ProductItemComponent>;

  products:Product[]; 

  constructor() { 
    // this.products=[];
    this.products=[{
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

    // console.log(this.products);
  }

  ngOnInit(){
    // console.log(this.products);
  }

  selectedProduct(productComponent:ProductItemComponent){
    // alert(`Product ${productComponent.product.name} selected.`);
    this.productItems.forEach(item =>{
      item.isSelected=false;
    });
    productComponent.isSelected=true;
  }
}
