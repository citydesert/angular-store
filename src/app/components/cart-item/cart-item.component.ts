import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { SItem } from '../../models/items';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
@Input() item:any=[];
@Output() oneItemPrice = new EventEmitter<object>();
qty:number=0;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.qty = this.item.qty;
  }

  itemQty(id:number,type:boolean):void{
    if(type===true){
      this.item.qty++;
    }else{
      this.item.qty--;
    }
    this.oneItemPrice.emit({id:id,price:this.item.price*this.item.qty});
    if(this.item.qty<1){ 
      alert("Item removed from your cart!"); 
     let ind = this.cart.cartItems.findIndex(i=>i.id===id);
     this.cart.cartItems.splice(ind,1);
     this.cart.subject.next(this.cart.cartItems.length);
    }
  }
  updatePrices(x:number):void{
    this.item.qty = x;
    this.oneItemPrice.emit({id:this.item.id,price:this.item.price*this.item.qty});
    if(this.item.qty<1){ 
      alert("Item removed from your cart!"); 
     let ind = this.cart.cartItems.findIndex(i=>i.id===this.item.id);
     this.cart.cartItems.splice(ind,1);
     this.cart.subject.next(this.cart.cartItems.length);
    }
  }
}
