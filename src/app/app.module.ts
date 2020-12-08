import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FetchItemsService } from './fetch-items.service';
import { ItemsListComponent } from './items-list/items-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FetchItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
