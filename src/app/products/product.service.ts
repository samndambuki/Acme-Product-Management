import { Injectable } from '@angular/core';
import { Iproduct } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class ProductService {

  //inject http client service instance into the http variable
  constructor(private http:HttpClient){}

  //local json file
  private productUrl = "api/products/products.json"

  getProducts(): Observable<Iproduct[]> {
    //generic parameter
    return this.http.get<Iproduct[]>(this.productUrl);
  }
}
