import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FetchItemsService } from './fetch-items.service';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemBlockComponent } from './item-block/item-block.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, ItemsListComponent, ItemBlockComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [FetchItemsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
