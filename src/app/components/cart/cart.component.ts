import { Component, Input, OnInit } from '@angular/core';
import { Items,SItem } from '../../models/items';
import { CartService } from '../../services/cart.service';
import { HttpService } from '../../services/http.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartItems:any[]=[];
qty:number=0;
totalPrice:number=0;
name:string="";
credit:string="";
address:string="";
  constructor(private http:HttpService,
    private cart:CartService,
    private loc:Location) {
      
    }

  ngOnInit(): void {
    this.totalPrice=0;
    for(let i of this.cart.cartItems){
      this.totalPrice += i.qty*i.price;
      this.cartItems.push(i);
    }
  
  }
  
  getTotal(x:any):number{
    this.totalPrice=0;
    let qts=0;
    for(let i of this.cartItems){
      this.totalPrice += i.qty*i.price;
      qts += i.qty;
    }
    Math.ceil(this.totalPrice);
    let iind = this.cartItems.findIndex(i=>(i.id===x.id));
    if(this.cartItems[iind].qty===0){
    this.cartItems.splice(iind,1);
    }
    return this.totalPrice;
  }

  confirmOrder():boolean{
      console.log("order confirmed");
      if(this.name.length<3 || this.address.length<3 || this.credit.length!==16){alert("check your input");return false;}
      let res:any = this.http.sendOrder({name:this.name,address:this.address,credit:this.credit,items:this.cartItems}); //RETURN JSON RESPONSE
      if(res.errors===0){
        this.loc.go("confirmation");
        location.reload();
        return true;
      }else{
        alert("There are some errors\n"+res.message);
        return false;
      }
  }
}
