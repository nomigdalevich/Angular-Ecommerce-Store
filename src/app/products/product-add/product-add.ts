import { Component, inject } from '@angular/core';
import { ProductServiceTs } from '../../shared/product-service.ts';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../shared/product.model.js';
// import { Router } from 'express';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-add',
  imports: [ReactiveFormsModule],
  templateUrl: './product-add.html',
  styleUrl: './product-add.css',
})
export class ProductAdd {

  productsService = inject(ProductServiceTs);
  constructor(private router:Router){}

  form = new FormGroup({
    nameP: new FormControl(''),
    price: new FormControl(''),
    des: new FormControl(''),
  })

  addP() {
    const formValue = this.form.value

    if (formValue) {
      const newProduct: Product = { id: this.productsService.products().length, name: formValue.nameP ?? '', price: Number(formValue.price ?? 0), description: formValue.des ?? '', image: 'img/default.png' }
      this.productsService.addProduct(newProduct)
      console.log("מספר האיברים במערך -" +this.productsService.products().length)
      console.log("ה id של המוצר האחרון שנוצר"+newProduct.id)
    }

    this.router.navigate(['/products'])

  }
}
