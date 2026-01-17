import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { ProductAdd } from './products/product-add/product-add';
import { ProductCard } from './products/product-card/product-card';
import { ProductDetails } from './products/product-details/product-details';
import { ProductEdit } from './products/product-edit/product-edit';
import { ProductList } from './products/product-list/product-list';
import { Cart } from './cart/cart';
import { ProductServiceTs } from './shared/product-service.ts';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterModule ,RouterOutlet,Home,ProductAdd,ProductCard,ProductDetails,ProductEdit,ProductList,Cart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-app');

  productsService = inject(ProductServiceTs);

  countProCart=this.productsService.countProCart

  ngOnInit(){ //service שליפת הנתונים דרך הקריאה לפונקציה שב
    this.productsService.takeProductsFromUrl();
  }


}
