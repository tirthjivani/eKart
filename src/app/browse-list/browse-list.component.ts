import { Component, OnInit } from '@angular/core';
import { Cipher } from 'crypto';
import { CartDataService } from '../cart-data.service';
import { FetchItemsService } from '../fetch-items.service';

@Component({
  selector: 'app-browse-list',
  templateUrl: './browse-list.component.html',
  styleUrls: ['./browse-list.component.css'],
})
export class BrowseListComponent implements OnInit {
  constructor(
    private _cartService: CartDataService,
    private _fetchItemService: FetchItemsService
  ) {}

  public items = [];
  public cart = [];

  ngOnInit() {
    this.cart = this._cartService.getCart();

    this._fetchItemService.getItems().subscribe(
      (data) => (
        (this.items = data),
        this.items.forEach((fetchedItem) => {
          fetchedItem.quantity = 0;
        }),
        this.items.forEach((fetchedItem) => {
          this.cart.forEach((cartItem) => {
            if (fetchedItem.id == cartItem.id) {
              console.log(fetchedItem, cartItem);
              fetchedItem.quantity = cartItem.quantity;
            }
          });
        }),
        console.log(this.items)
      )
    );
  }
}
