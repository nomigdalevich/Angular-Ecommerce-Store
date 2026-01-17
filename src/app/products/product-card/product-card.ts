import { Component, inject, input, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductDetails } from '../product-details/product-details';
import { ProductServiceTs } from '../../shared/product-service.ts';
import { Product } from '../../shared/product.model';
@Component({
  selector: 'app-product-card',
  imports: [ProductDetails, RouterModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  constructor(private router: Router) { }

  productsService = inject(ProductServiceTs);
  countProCart = this.productsService.countProCart;  

  changeCurrentP(p: Product) {
    this.productsService.changeCurrentP(p);
  }


  // @Input() - ככה מקבלים נתונים מקומפוננטת האבא
  //product-list - במקרה הזה  
  @Input() id = 0;
  @Input() name = '';
  @Input() price = 0;
  @Input() description = '';
  @Input() img = '';


  // goToDetails(id: number) {
  //   console.log("1. הפונקציה בקומפוננטה נקראה עם ID:", id);
  //   const prouduct : Product = { id: this.id, name: this.name, price: this.price, description: this.description, image: this.image }
  //   this.changeCurrentP(prouduct);
  //   this.router.navigate(['/detailsProduct', id])
  // }

  //פונקציה שיוצרת משתנה ערוך , שולחת אותו לפונקציה שלמעלה פה
  //productService הפונקציה שולחת לפונקציה שב 
  //אחרי זה מנווטת ישר לדף מוצרים
  goToDetails() {
    const prouduct: Product = { id: this.id, name: this.name, price: this.price, description: this.description, image: this.img }
    this.changeCurrentP(prouduct);
    this.router.navigate(['/detailsProduct'])
  }

  //פונקציה שמעדכנת את מספר המוצרים שבסל
  addToCart() {
    //שלי signal עדכון מונה ה
    // this.countProCart()+1;  - הצורה הזאת היא לא נכונה כי היא רק ניגשת למשתנה מוסיפה לו
    //  אחד אבל בפועל לא מעדכנת אותו, הפעולה של ההוספת 1 פשוט נמחקת

    //יש שתי פונקציות שמעדכנות - 
    //set() - יותר משתמשים כשרוצים להחליף את הערך לגמרי , update() = - יותר משתמשים שכשרוצים לעדכן ערך
    // this.countProCart.set(this.countProCart()+1)
    this.countProCart.update(countProCart => countProCart + 1);
  }

}
