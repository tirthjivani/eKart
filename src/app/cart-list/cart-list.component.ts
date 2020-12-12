import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../cart-data.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  constructor(private cartService: CartDataService) {}

  public cartTotal;
  public amountTotal;

  ngOnInit() {
    this.cartTotal = this.cartService.getCartTotal();
    this.amountTotal = this.cartService.getCartAmountTotal();
  }
}
