import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Items, SItem } from '../../models/items';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  items:Items[]=[];
  item:any;
  data:any;
  qty:number=1;

  constructor(private route:ActivatedRoute,
    private location:Location,
    private http:HttpService,
    private cart:CartService) {     
      this.item={
        id:0,
        name:'',
        url:'',
        price:0,
        description:''
      }
  }
  
  ngOnInit(): void {
    this.http.getItems().subscribe(res=>{for(let i of res){
      this.items.push(i);
    }
    let id= Number(this.route.snapshot.paramMap.get('id'));
    this.item = this.items.find(h=>h.id===id);
  });
    
  }

  addToCart(): object{
    this.data={id:this.item.id,name:this.item.name,qty:this.qty,price:this.item.price,url:this.item.url}
    return this.cart.addToCart(this.data);
  }
  goBack():void{
    this.location.back();
  }
}
