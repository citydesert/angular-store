import { Component, OnInit ,Input} from '@angular/core';
import { Items } from '../../models/items';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() item:Items;
data:any;
qty:number=1;

  constructor(private cart:CartService) {
    this.item = {
      id:0,
      price:0,
      description:'',
      name:'',
      url:'',
    };
   }

  ngOnInit(): void {
  }

  addToCart(x:any):any{
    this.data={id:this.item.id,name:this.item.name,qty:this.qty,price:this.item.price,url:this.item.url}
    return this.cart.addToCart(this.data);
  }
}
