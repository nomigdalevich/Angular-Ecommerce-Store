import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../shared/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceTs {

  constructor() { };
  http = inject(HttpClient) // לתוך השירות HttpClient ככה אנחנו מייבאים את 
                            //ושומרים בתוך משתנה

  //ולשמור בתוך משתנה C-TOR אפשר לייבא גם ב 
  //constructor(private http:HttpClient)

  // //מערך של מוצרים 
  // products = signal<Product[]>([
  //   { id: 1, name: "Bugaboo", price: 1350, description: "-----", image: "no imag" },
  //   { id: 2, name: "Cybex", price: 1200, description: "-----", image: "no imag" },
  //   { id: 3, name: "Stokke", price: 990, description: "-----", image: "no imag" },
  // ]);

  // products=signal<any[]>([]); - אפשר להגדיר גם כך , עדיף סוג ספציפי
  products=signal<Product[]>([]);


  //data/data.json פונקציה ששולפת את הנתונים מהקישור - במקרה זה 
  //איך זה בדיוק קורה?
  //HttpClient שהתפקיד שלו לאכסן את ה http - אנחנו ניגשים למשתנה שיצרנו 
  //(וגם להחזיר במקרה הצורך) לאפשר לאנגולר לתקשר עם שרת חיצוני ולשלוף משם נתונים HttpClient תפקיד ה
  //שתפקידה שליפת הנתונים get אנחנו ניגשים אליו ושולפים את הנתונים עי הפעולה
  //הנתונים עדיין לא ממש בידינו this.http.get<Product[]>('data/data.json') חשוב להדגיש בפעולה הזו 
  //אנחנו רק מכינים את זה שהנתונים יגיעו אלינו עוד מעט

  //אנחנו ניגשים לקישור שבו נמצאים הנתונים 
  // <> מה שנמצא בתוך
  //זה הסוג שאנחנו מצפים לקבל :
  //<any> - אוביקט בודד מכל סוג שהוא
  //<any[]> - מערך/רשימה של אוביקטים מכל סןג שהוא
  //וכ number,string ניתן בתוך לשים 
  //<string> , <number[]> ..
  //לנתונים שלנו אנחנו יכולים לשים את הסוג שהגדרנוInterface ברגע שהגדרנו
  //הכי טוב זה להגדיר לאנגולר מדויק איזה סוג יחזור

  //subscribe() - בפעולה הזו אנחנו בעצם מאפשרים לנתונים לזרום ,
  //  בעצם "פותחים את הברז" ומאפשרים לנתונים לזרום
  //אחרי שאפשרנו לנתונים לזרום יש שלוש תגובות שאנחנו יכולים להגיב
  //1. next - מה לעשות שהנתונים הגיעו בהצלחה , זה החלק הכי חשוב
  //2. erroe -(לדוגמא הקובץ לא נמצא וכו) מה לעשות שקרתה תקלה 
  //3. complete -(פחות בשימוש יומיומי) מה לעשות כשהכל יסתיים - זאת אומרת כשהשרת סיים להזרים את כל הנתונים לגמרי 
  takeProductsFromUrl(){
    this.http.get<Product[]>('data/data.json').subscribe({
      next: (x) => { //date - האוביקט עם הנתונים
        this.products.set(x) //עדכון המשתנה שלנו בערך שחזר
      },
      error: (err) => {//האוביקט שמכיל את השגיאה עם פירוט
        console.log("שגיאה בטעינת הקובץ "+err) // במקרה הזה בחרתי להדפיס שהיה שגיאה ואוביקט השגיאה
      }
    })
  }
  
  currentP: Product | null = null;

  countProCart=signal(0);

  //הוספת מוצר
  addProduct(p: Product) {
    this.products.update(pArr => [...pArr, p])
  }

  //עריכת מוצר
  //p - זה המוצר שהתקבל בצורה המעודכנת
  //pr - זה המוצר הנוכחי במערך 
  editProduct(p: Product) {
    this.products.update(pArr => pArr.map(pr => pr.id == p.id ? p : pr))
  }

  //הסרת מוצר
  removeProduct(index: number) {
    this.products.update(pArr => pArr.filter(pr => pr.id !== index))
  }

  //המוצר הנוכחי
  changeCurrentP(p :  Product){
    console.log("jguhj")
    // console.log(this.currentP)
    this.currentP=p;
    // console.log(this.currentP)
  }
}

//המוצר שלנו מוגדר - 
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   image: string;

