import { Injectable } from '@angular/core';
import { Items, SItem } from '../models/items';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems:SItem[]=[];
  subject = new Subject<number>();
  constructor() {  }
  

addToCart(item:SItem): object{
    let ind = this.cartItems.findIndex(v=>v.id===item.id);
    if(ind>-1){
      this.cartItems[ind].qty = Math.ceil(this.cartItems[ind].qty)+Math.ceil(item.qty);
    }else{
    this.cartItems.push(item);
    }    
    this.subject.next(this.cartItems.length);
    alert("added to cart");
    return this.cartItems;
  }

  getCartItemsCount():Observable<number>{
    this.subject.next(this.cartItems.length);
      return this.subject.asObservable();
  }

}
