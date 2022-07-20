import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  cartCount:number=0;
  constructor(private cart:CartService) {
    //this.cartCount=cart.cartItems.length;
   }
  ngOnInit(): void {
    this.cart.getCartItemsCount().subscribe(v=>{
      this.cartCount = v;
    });
  }


}
