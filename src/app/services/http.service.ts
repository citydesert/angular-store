import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  
  getItems(): Observable<[]> {
    return this.http.get<[]>('assets/data.json');
  }
  
  sendOrder(d:object): object { //i need to use Observable if there is a real connection to remote script
    //return this.http.post('angulate.php?a=test',d); 
    let exampleResult={message:"done",errors:0};
    console.log(exampleResult);
    return exampleResult;
  }
  
}