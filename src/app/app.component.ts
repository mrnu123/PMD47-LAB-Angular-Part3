import { Component, ViewChild,OnInit, ViewChildren } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'lab2-recipe';

  @ViewChild('productList')
  productList:ProductListComponent;

  constructor(){}
  
  ngOnInit():void{

    // this.productList.products=[
    //   {
    //     name:'ส้มโอ',
    //     price:220
    //   },
    //   {
    //     name:'มะละกอ',
    //     price:230
    //   },
    //   {
    //     name:'ทุเรียน',
    //     price:520
    //   }
    // ];
    // this.productList.products.push({
    //       name:'ส้มโอ',
    //       price:220
    //     });
    console.log("ss");
  }
}
