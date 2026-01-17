import { Component, inject } from '@angular/core';
import { ProductServiceTs } from '../shared/product-service.ts';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  productsService = inject(ProductServiceTs);
  countProCart=this.productsService.countProCart;

  removeAllP(){
    console.log("removeAllP")
    this.countProCart.set(0)
  }

}
