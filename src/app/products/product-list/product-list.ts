import { Component, inject } from '@angular/core';
import { ProductServiceTs } from '../../shared/product-service.ts';
import { ProductCard } from '../product-card/product-card.js';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  //שליפת ה service של מוצרים
  //service וכך ניתן לגשת לכל הפונקציות והמשתנים שב 
  productsService=inject(ProductServiceTs);

  arr=this.productsService.products;

}
