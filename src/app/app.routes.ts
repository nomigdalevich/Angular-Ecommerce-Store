import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProductList } from './products/product-list/product-list';
import { ProductAdd } from './products/product-add/product-add';
import { ProductDetails } from './products/product-details/product-details';
import { ProductCard } from './products/product-card/product-card';
import { ProductEdit } from './products/product-edit/product-edit';
import { Cart } from './cart/cart';

//פה מרכזים את כל הניווט לדפים
//path - שם שאני מחליטה
//component - שם הקומפוננטה שאליה ינווטו
//של הקומפוננטה מהשם של הקלאס ts את הקומפוננטה אנחנו לוקחים מהקובץ 
//export class HomeComponent {
//מקובל שהמעבר לדף הבית יהיה במחאות ריקות - לא חובה
export const routes: Routes = [
    {path: '' , component: Home},
    {path: 'products' , component:ProductList},
    {path: 'addProduct' , component: ProductAdd},
    // {path: 'detailsProduct/:id' , component:ProductDetails},
    {path: 'detailsProduct' , component:ProductDetails},
    {path: 'cardProducts' , component: ProductCard},
    {path: 'editProduct' , component: ProductEdit},
    {path: 'cart' , component:Cart}
];
