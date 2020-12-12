import { Injectable, OnInit } from '@angular/core';
import { FetchItemsService } from './fetch-items.service';

@Injectable({
  providedIn: 'root',
})
export class CartDataService {
  private cart = [];
  private cartTotal = 0;
  private amountTotal = 0;

  updateCart(item) {
    let inCart = false;
    this.cart.forEach((itm) => {
      if (itm.id == item.id) {
        itm.quantity = item.quantity;
        inCart = true;
      }
    });
    console.log(inCart);
    if (!inCart) {
      this.cart.push(item);
    }
    this.cartTotal = 0;
    this.amountTotal = 0.0;
    this.cart.forEach((itm) => {
      this.cartTotal += itm.quantity;
      this.amountTotal += itm.quantity * itm.price;
    });
  }

  getCart(): any {
    return this.cart;
  }

  getCartTotal(): any {
    return this.cartTotal;
  }

  getCartAmountTotal(): any {
    return this.amountTotal;
  }

  constructor() {}
}
