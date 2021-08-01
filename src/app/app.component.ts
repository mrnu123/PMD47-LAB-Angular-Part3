import { Component, ViewChild,OnInit, ViewChildren } from '@angular/core';
import { BackendService } from './backend.service';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  // title = 'lab2-recipe';
  constructor(private backendService:BackendService){}

  @ViewChild('productList')
  productList:ProductListComponent;
@ViewChild('number1') number1:ProductListComponent;
products=[
  {
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
  }
];
productService=this.backendService.getProducts();
  ngOnInit():void{
    // this.productList=new ProductListComponent;
   
    
    // this.productList.products.push({
    //       name:'ส้มโอ',
    //       price:220
    //     });
    // console.log(this.number1);
    // this.productList.products=this.backendService.getProducts();
    console.log("ss");
  }
}
