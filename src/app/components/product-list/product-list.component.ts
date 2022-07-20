import { Component, OnInit } from '@angular/core';
import { Items } from '../../models/items';
import { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
items:Items[]=[];
  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    
    
    this.httpService.getItems().subscribe(data=>{

      for(let i of data){
        this.items.push(i);
      }
      
    });
  }

}
