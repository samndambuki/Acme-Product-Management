import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';

  //this component needs to read the route parameter
  //so as to know which products details to display

  //Activated Route Service provides the state of the current route, including route parameters

  //set activated route as a dependency by defining it as a parameter to the constructor function
  constructor(private route: ActivatedRoute) {}

  //called when the component is initialized
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += ` : ${id}`
  }


}
