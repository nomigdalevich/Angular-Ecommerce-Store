import { Component, inject } from '@angular/core';
import { ProductServiceTs } from '../../shared/product-service.ts';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-details',
  imports: [RouterModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {

  constructor(private router: Router) { }

  productsService = inject(ProductServiceTs);
  currentP = this.productsService.currentP;

  //יצירת המשתנים
  name: any;
  price: any;
  des: any;
  img: any;

  //כדי שכל האתחול שלהם יהיה אחרי שהקומפוננטה נטענת
  //ngOnInit אתחול המשתנים יעשה בבלוק של  
  //null/undfinde כדי שהם לא יהיו 
  ngOnInit() {
    this.name = this.currentP?.name;
    this.price = this.currentP?.price;
    this.des = this.currentP?.description;
    this.img = this.currentP?.image;
  }
  // currentP=this.productsService.currentP;

  // name=this.currentP?.name
  // price=this.currentP?.price
  // des=this.currentP?.description
  // img=this.currentP?.image

  // get product() {
  //   return this.productsService.currentP;
  // }

  //מחיקת מוצר
  //service לפונ שב id הפונ הזאת שולחת את ה 
  deleteP() {
    // alert('test')
    const id=this.currentP?.id
    // console.log("deleteP")
    if(id!==undefined)
    this.productsService.removeProduct(id);
    this.router.navigate(['/products'])
  }

  //הפונקציה הזאת מנווטת לדף עריכת מוצר
  toEditProduct(){
    this.router.navigate(['/editProduct'])
  }
}
