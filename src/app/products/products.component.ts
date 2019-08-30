import { Component, OnInit } from '@angular/core';

import { HttpService } from '../services/http.service';

// import for products interface
import {ProdInterface } from './prod-interface';
import{ CartService } from '../services/cart.service';
import{ ProductService } from '../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Observable<{}>

  constructor(private dataService: HttpService, private cartService: CartService,
    private productService: ProductService) {
      this.products = this.productService.getAll()
     }


  ngOnInit() {
    // return this.dataService.getProducts().subscribe( data=>{ 

    //   this.products = {
    //     color_way:data[0]['color_way'],
    //     name: data[0]['name'],
    //     id:data[0]['id'],
    //     description: data[0]['description'],
    //     photo: data[0]['photo'],
    //     price: data[0]['price'],
    //     qty: data[0]['qty']

    //   }
    //   console.log(this.products)
    // })
  }

  //creating thhe function for adding to cart using
  // the cart service recently created

  // addToCartprod() {
  //   this.cartService.addToCart(this.products)
  // }

}
  
