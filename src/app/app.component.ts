import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tirth';
  cartTotal = 0;
  amountTotal = 0;
  messageAdded = '';
  private cart = [];

  updateCart = (item, quantity): void => {
    let inCart = false;
    console.log(item.title, quantity);
    this.cart.forEach((itm) => {
      if (itm.id == item.id) {
        itm.quantity = quantity;

        inCart = true;
      }
    });
    if (inCart) {
      console.log('Added');
    } else {
      this.cart.push(item);
      item.quantity = 1;
    }
    this.cartTotal = 0;
    this.amountTotal = 0.0;
    this.cart.forEach((itm) => {
      this.cartTotal += itm.quantity;
      this.amountTotal += itm.quantity * itm.price;
    });
  };
}
