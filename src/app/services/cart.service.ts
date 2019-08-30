import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database'
import { ProdInterface } from '../products/prod-interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private db: AngularFireDatabase) { }

// create a new cart inside of firebase and specify the time
  create() {
    return this.db.list('shopping-carts').push({
      dateCreated: new Date().getTime()
    })
  }

  private getCart(cartId:string){
    return this.db.object('/shopping-cart/' + cartId)
  }

  // get a cart or create one if not avalible

  private  async getOrCreateCart():Promise<string>{
    let cartId = localStorage.getItem('cartId') //look inside the browser localstorage and get the cart id if one exist
    if (cartId) return cartId // if is true if is exist then return id
    let result = await this.create()// if one those not exist then we create in local storageof the browser
    localStorage.setItem('cartId', result.key)
    return result.key
    }

    private getItem(cartId: string, productId: string){
      return this.db.object('/shopping-carts/' + cartId + '/items/' + productId)
    }

    async addToCart(product:ProdInterface) {
      let quant_num: number = 0;
      let cartId = await this.getOrCreateCart();
      let item$ = this.getItem(cartId,product.name)
      item$.set({product:product, quantity: this.incrementQty(quant_num)})
    }

    private incrementQty(quant_num:number) {
      return quant_num + 1
    }

  }


