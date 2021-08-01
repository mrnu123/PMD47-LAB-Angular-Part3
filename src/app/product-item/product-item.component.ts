import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
import {Product} from '../Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() 
  product:Product;

  @Output() 
  OnSelected:EventEmitter<ProductItemComponent>=new EventEmitter();

  isSelected:boolean;

  constructor() { }

  ngOnInit(){
    // console.log(this.product);
  }

  select(){
    this.OnSelected.emit(this);
  }
}
