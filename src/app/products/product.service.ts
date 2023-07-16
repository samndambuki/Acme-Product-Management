import { Injectable } from '@angular/core';
import { Iproduct } from './products';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //inject http client service instance into the http variable
  constructor(private http: HttpClient) {}

  //local json file
  private productUrl = 'api/products/products.json';

  //returns an observabe odf Iproducct array
  getProducts(): Observable<Iproduct[]> {
    //generic parameter
    //htpt get returns an observable
    //calll pipe method to specify a set of operators
    return this.http.get<Iproduct[]>(this.productUrl).pipe(
      //acccess emitted item without modifying it
      //JSON stringify - method that converts an object or an array of objects to a json string
      tap((data) => console.log('ALL:', JSON.stringify(data))),
      //takes in a function - for this case a named function instead of an arrow function
      catchError(this.handleError)
    );
  }

  private handleError(err:HttpErrorResponse){
    let errorMessage = "";
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error ocurred: ${err.error.message});
      }`
    }else{
      errorMessage = `Server returned code : ${err.status}, error message is: ${err.message}`
    }
    console.log(errorMessage);
    return throwError(()=>errorMessage)
    
  }
}
