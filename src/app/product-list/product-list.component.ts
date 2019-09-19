import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  onNotify(){
    window.alert('You will be nified when the product goes on sale');
  }
  share() {
    window.alert('The product has been shared!');
  }
}


