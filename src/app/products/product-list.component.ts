import { Component, OnInit } from '@angular/core';
import { Iproduct } from './products';
import { ProductService } from './product.service';
import { Observable, filter, map, range } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  //porperty keeps track if images are currenlty displayed
  //images are not displayed when page is loaded
  showImage: boolean = false;
  // listFilter: string = 'cart';

  //_ - to denote it as private
  //backing variablr
  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In Setter', value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: Iproduct[] = [];

  products: Iproduct[] = [];

  //accessor - private, public, protected

  constructor(private productService:ProductService){}

  performFilter(filterBy: string): Iproduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Iproduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  //methods created after properties defined
  toggleImage(): void {
    //toggles state o fthe show image property
    //! - not operator
    //retruns false if operand is true
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    console.log('In OnInit');
    // this.listFilter = '';
  }


  onRatingClicked(message:string):void{
    this.pageTitle = 'Product List : ' + message
  }
   
  //normal function to capitalize
  // capitalizeName(product:Iproduct) :string{
  //   return product.productName.toUpperCase();
  // }

  //arrow function
  // (product:Iproduct) => product.productName.toUpperCase()

  //multistatement
  // (product:Iproduct) => {
  //   console.log(product.productName);
  //   return product.productName.toUpperCase();
  // }

}

  //number - geeric argument
  // const source$:Observable<number> = range(0,10);
  // source$.pipe(
    //two operators
    //transform each emitted item
  //   map(x=>x*3),
  //x is the item omitted from prior operator
  //   filter(x=>x%2 === 0)
  //start the observable using subscribe method
  //observable omits a range of numbers
  // ).subscribe(x=>console.log(x));


// let nicknames = ['sam','john','james']
// for(let nickname in nicknames){
//   console.log(nickname)
// }


