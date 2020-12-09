import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tirth';
  cartTotal = 10;
  messageAdded = '';

  updateCart = (item, quantity): void => {
    console.log(item, quantity);
  };

  public onAdd() {
    this.messageAdded = 'Item added to cart!!';
  }

  public onRemove() {
    this.messageAdded = 'Item removed to cart!!';
  }
}
