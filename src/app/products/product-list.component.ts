import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  //porperty keeps track if images are currenlty displayed
  //images are not displayed when page is loaded
  showImage: boolean = false;
  listFilter:string = "cart";

  products: any[] = [
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

  //methods created after properties defined
  toggleImage(): void {
    //toggles state o fthe show image property
    //! - not operator
    //retruns false if operand is true
    this.showImage = !this.showImage;
  }
}

// let nicknames = ['sam','john','james']
// for(let nickname in nicknames){
//   console.log(nickname)
// }
