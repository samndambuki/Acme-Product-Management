import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

//since guard is a service it needs to be registered with an injector
@Injectable({
  providedIn: 'root',
})

//implements CanActivate interface
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) {}

  //canActivate method
  //has two parameters
  canActivate(
    //provide current route information
    route: ActivatedRouteSnapshot,
    //provide router state information
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //sets id from current route parameter
    //converts the string parameter to a number
    const id = Number(route.paramMap.get('id'));
    //if statement to check a parameter
    if (isNaN(id) || id < 1) {
      alert('Invalid product id');
      this.router.navigate(['products']);
      //cancel activating product detail route
      return false;
    }
    //continue on to the product detail page
    return true;
  }
}
