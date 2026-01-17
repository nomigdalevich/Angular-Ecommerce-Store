import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductServiceTs } from '../../shared/product-service.ts';
import { Product } from '../../shared/product.model.js';
import { Router } from '@angular/router';//חשוב לבדוק שהוא מייבא דווקא מפה ולא ממקום אחר

@Component({
  selector: 'app-product-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './product-edit.html',
  styleUrl: './product-edit.css',
})
export class ProductEdit {

  //ProductServiceTs שלפנו את ה 
  productsService = inject(ProductServiceTs);
  //שאיתו נשתמש כדי לנווט Router יצרנו 
  constructor(private router:Router){}

  //יצירת טופס
  form = new FormGroup({//שדה רבים

    nameP: new FormControl(''),//שדה יחיד
    price: new FormControl(''),
    des: new FormControl(''),
  })

  ngOnInit() { //ngOnInit - כל מה שקורה בתוכו מתבצע רק אחרי שהקומפוננטה נטענת לגמרי
    const currentP = this.productsService.currentP;
    this.form.patchValue({
      nameP: currentP?.name,
      price: currentP?.price?.toString(),
      des: currentP?.description
    })
  }

  //עריכת מוצר
  editP() {
    const currentP = this.productsService.currentP;
    const formValue = this.form.value

    if (currentP && formValue) {
      const updatProduct: Product = { id: currentP?.id, name: formValue.nameP ?? '', price: Number(formValue.price ?? 0), description: formValue.des ?? '', image:  currentP.image}
      this.productsService.editProduct(updatProduct)
    }

    this.router.navigate(['/products'])

  }


}
