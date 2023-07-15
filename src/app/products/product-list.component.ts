import { Component, OnInit } from '@angular/core';
import { Iproduct } from './products';
import { filter } from 'rxjs';

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
    this.filteredProducts = this.performFilter(value)
  }


  filteredProducts: Iproduct[] = []


  products: Iproduct[] = [
    {
      productId: 2,
      productName: 'Garden-dart',
      productCode: 'GDN-0023',
      releaseDate: 'MARCH 18,2021',
      description: '15 gallon capacity',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21 ,2021',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl: 'assets/images/hammer.png',
    },
  ];

  performFilter(filterBy:string):Iproduct[]{
    filterBy = filterBy.toLocaleLowerCase()
    return this.products.filter((product:Iproduct)=>
    product.productName.toLocaleLowerCase().includes(filterBy))

  }

  //methods created after properties defined
  toggleImage(): void {
    //toggles state o fthe show image property
    //! - not operator
    //retruns false if operand is true
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('In OnInit');
    this.listFilter = 'cart';
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

// let nicknames = ['sam','john','james']
// for(let nickname in nicknames){
//   console.log(nickname)
// }
