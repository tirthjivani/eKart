import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-list',
  templateUrl: './browse-list.component.html',
  styleUrls: ['./browse-list.component.css'],
})
export class BrowseListComponent implements OnInit {
  cartTotal = 0;
  amountTotal = 0;
  messageAdded = '';
  private cart = [];

  constructor() {}

  ngOnInit(): void {}

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
