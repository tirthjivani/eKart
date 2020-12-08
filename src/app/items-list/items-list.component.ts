import { Component, OnInit } from '@angular/core';
import { FetchItemsService } from '../fetch-items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent implements OnInit {
  public items = [];

  constructor(private _fetchItemService: FetchItemsService) {}

  ngOnInit() {
    this._fetchItemService.getItems().subscribe((data) => (this.items = data));
  }
}
